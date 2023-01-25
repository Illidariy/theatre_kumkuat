const React = require('react');
const Layout = require('./Layout');

function Spectacles({ title, spectacles }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>Spectacles</h1>
        <ul className="list-group">
          {spectacles.map((spectacle) => (
            <li key={spectacle.id} className="list-group-item">
              <img src={spectacle.photo} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{spectacle.title}</h5>
                <p className="card-text">{spectacle.body}</p>
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

module.exports = Spectacles;