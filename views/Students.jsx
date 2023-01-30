const React = require('react');
const Layout = require('./Layout');

function Students({ title, students, user }) {
  return (
    <Layout title={title} user={user}>
      <form method="POST" action="/students" id="form-student">
        <div className="form-text">Please fill out the form</div>
        <div className="containeer">
          <div className="mb-3">
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name,"
              className="form-control"
              id="input-fName"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="secondName"
              placeholder="your second name"
              className="form-control"
              id="input-sName"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="age"
              placeholder="your age"
              className="form-control"
              id="input-age"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="exper"
              placeholder="your experience"
              className="form-control"
              id="input-exper"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="about"
              placeholder="some info about you"
              className="form-control"
              id="input-text"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              placeholder="your phone number"
              className="form-control"
              id="input-phone"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="and yout email"
              className="form-control"
              id="input-email"
              autoComplete="off"
              required
            />
          </div>
          <div id="feedback" className="feedback" />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
      <div className="container">
        <h1>Students</h1>
        <div className="list-group">
          {students.map((student) => (
            <div key={student.id} className="list-group-item">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {student.firstName} {student.secondName}
                  </h5>
                  <h6 className="card-subtitle mb-2">
                    {student.age} {student.exper}
                  </h6>
                  <p className="card-text">{student.about}</p>
                  <h6 className="card-subtitle mb-2">
                    {student.phone} {student.email}
                  </h6>
                  <a href="#" className="card-link-edit">
                    Edit
                  </a>
                  <a href="student" className="card-link-delete">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Students;
