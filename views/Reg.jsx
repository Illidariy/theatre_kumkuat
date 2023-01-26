const React = require('react');
const Layout = require('./Layout');

function Reg({ title }) {
  return (
    <Layout title={title}>
      <form method="POST" action="/auth/reg" id="form-reg">
        <div className="form-text">Please fill out the form</div>
        <div className="containeer">
          <div className="mb-3">
            <input
              type="text"
              name="login"
              placeholder="Enter your login,"
              className="form-control"
              id="input-login"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="userName"
              placeholder="your name"
              className="form-control"
              id="input-userName"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="and password"
              minLength="8"
              className="form-control"
              id="input-regPass"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Confirm your password"
              minLength="8"
              className="form-control"
              id="input-regPassConf"
              autoComplete="off"
              required
            />
          </div>
          <div id="feedback" className="feedback" />
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Reg;
