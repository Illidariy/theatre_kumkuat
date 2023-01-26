const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {user ? (
          <a className="navbar-brand" href="#">
            Hello,
            {user.userName}!
          </a>
        ) : (
          <a className="navbar-brand" href="#">
            NavBar
          </a>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home Page
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/actors">
                Actors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/spectacles">
                Spectacles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/students">
                Students
              </a>
            </li>
            {!user ? (
              <li className="nav-item">
                <a className="nav-link" href="/auth/login">
                  Login
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/auth/logout">
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
