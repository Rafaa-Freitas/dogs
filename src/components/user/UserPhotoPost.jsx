import React from 'react';
import styles from './UserPhotoPost.module.scss';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Input from '../forms/Input';
import Button from '../forms/Button';
import Error from '../helpers/Error';

import { POST_PHOTO } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../helpers/Head';

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');

  const [img, setImg] = React.useState({});
  const { data, error, isLoading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      navigate('/conta');
    }
  }, [data, navigate]);

  function isFormValid() {
    return (
      nome.isValid() && peso.isValid() && idade.isValid() && img.raw !== null
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');

    const { url, options } = POST_PHOTO(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        {isLoading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error}></Error>
      </form>

      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
}

export default UserPhotoPost;
