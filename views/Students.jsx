const React = require('react');
const Layout = require('./Layout');

function Students({ title, students, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <h1>Students</h1>
        <ul className="list-group">
          {students.map((student) => (
            <li key={student.id} className="list-group-item">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {student.firstName} {student.secondName}
                  </h5>
                  <h6 className="card-subtitle mb-2">
                    {student.age} {student.exper}
                  </h6>
                  {/* <p className="card-text">{student.about}</p> */}
                  <h6 className="card-subtitle mb-2">
                    {student.phone} {student.email}
                  </h6>
                  <a href="#" className="card-link">
                    Edit
                  </a>
                  <a href="#" className="card-link">
                    Delete
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

module.exports = Students;
