import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { GET_PHOTO } from '../../api';
import Error from '../helpers/Error';
import LoadingBone from '../helpers/LoadingBone';
import PhotoContent from './PhotoContent';

function Photo() {
  const { id } = useParams();
  const { data, isLoading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_PHOTO(id);
    request(url, options);
  }, [id, request]);

  if (error) {
    return <Error error={error}></Error>;
  }

  if (isLoading) {
    return <LoadingBone></LoadingBone>;
  }

  if (data) {
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} single={true}></PhotoContent>
      </section>
    );
  }

  return null;
}

export default Photo;
