const React = require('react');
const Layout = require('./Layout');

function SpectaclePage({ title, spectacle, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="block-img">
        <img src={spectacle.photo} className="card-img-top" alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{spectacle.title}</h5>
        <p className="card-text">{spectacle.body}</p>
      </div>
      <div className="card-body">
        <a href="#" className="card-link">
          Edit
        </a>
        <a href="#" className="card-link">
          Delete
        </a>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <h6>Reviews</h6>
      <ul>
        {spectacle.Reviews.map((review) => (
          <li key={review.id}>
            <p>Пользователь - {user.userName}</p>
            {review.title}
            <br />
            {review.body}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = SpectaclePage;
