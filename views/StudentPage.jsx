const React = require('react');

function StudentPage({ student }) {
  return (
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
        <a href={`students/${student.id}`} className="card-link-edit">
          Edit
        </a>
        <br />
        <a
          href={`students/${student.id}`}
          data-id={student.id}
          className="card-link-delete"
        >
          Delete
        </a>
      </div>
    </div>
  );
}

module.exports = StudentPage;
