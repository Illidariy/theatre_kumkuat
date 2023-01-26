const React = require('react');
const Layout = require('./Layout');

function Home({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <h1>Home page</h1>
        <img
          src="/img/home.jpg"
          height="400px"
          width="400px"
          className="img-fluid"
          alt=""
        />
      </div>
    </Layout>
  );
}

module.exports = Home;
