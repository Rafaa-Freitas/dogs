import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [canInfiniteScroll, setCanInfiniteScroll] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (canInfiniteScroll) {
        const scroll = window.scrollY;
        const pageHeight = document.body.offsetHeight - window.innerHeight;

        if (scroll > pageHeight * 0.85 && !wait) {
          wait = true;
          setPages((pages) => [...pages, pages.length + 1]);
          setTimeout(() => {
            wait = false;
          }, 700);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      removeEventListener('wheel', infiniteScroll);
      removeEventListener('scroll', infiniteScroll);
    };
  }, [canInfiniteScroll]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}></FeedModal>
      )}

      {pages.map((page) => {
        return (
          <FeedPhotos
            key={page}
            user={user}
            page={page}
            setModalPhoto={setModalPhoto}
            setCanInfiniteScroll={setCanInfiniteScroll}
          ></FeedPhotos>
        );
      })}
    </div>
  );
}

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
