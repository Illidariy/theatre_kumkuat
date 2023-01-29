const React = require('react');
const Layout = require('./Layout');

function Actors({ title, actors, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <h1>Actors</h1>
        <ul className="list-group">
          {actors.map((actor) => (
            <li key={actor.id} className="list-group-item">
              <img src={actor.photo} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">
                  {actor.firstName} {actor.secondName}
                </h5>
                <h6 className="card-title">{actor.title}</h6>
                <p className="card-text">{actor.body}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Edit
                </a>
                <a href="#" className="card-link">
                  Delete
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

module.exports = Actors;
