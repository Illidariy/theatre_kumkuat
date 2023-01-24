const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <form>
        <div className="containeer">
          <div className="mb-3">
            <input
              type="text"
              name="login"
              placeholder="Please enter your login"
              className="form-control"
              id="input-login"
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
              id="input-password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <div className="form-text">
            Or
            <a href="/auth/reg"> sign up</a>
          </div>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Login;
