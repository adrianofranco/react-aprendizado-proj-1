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
