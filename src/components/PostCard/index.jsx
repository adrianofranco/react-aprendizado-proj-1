import P from 'prop-types';

import './styles.scss';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <figure>
      <img src={cover} alt={title} />
    </figure>
    <div className="post-content">
      <h1>
        {id} - {title}
      </h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
