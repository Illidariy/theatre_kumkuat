const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>
      <form>
        <div className="form-text">Please fill out the form</div>
        <div className="containeer">
          <div className="mb-3">
            <input
              type="text"
              name="login"
              placeholder="Enter your login,"
              className="form-control"
              id="input-login"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="password and"
              minLength="8"
              className="form-control"
              id="input-password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="password again"
              minLength="8"
              className="form-control"
              id="input-password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Reg;
