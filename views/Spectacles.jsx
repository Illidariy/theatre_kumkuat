const React = require('react');
const Layout = require('./Layout');

function Spectacles({ title, spectacles, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <h1>Spectacles</h1>
        <ul className="list-group">
          {spectacles.map((spectacle) => (
            <li key={spectacle.id} className="list-group-item">
              <div className="block-img">
                <img src={spectacle.photo} className="card-img-top" alt="" />
              </div>

              <div className="card-body">
                <h5 className="card-title">{spectacle.title}</h5>
                <a href={`/spectacles/${spectacle.id}`}>More...</a>
              </div>
              {/* <ul className="list-group list-group-flush">
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
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

module.exports = Spectacles;
