const React = require('react');

function StudentPage({ student, user }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" name="studentFirstName">
          {student.firstName}
        </h5>
        <h5 className="card-title" name="studentSecondName">
          {student.secondName}
        </h5>
        <p className="card-subtitle mb-2" name="studentAge">
          age: {student.age}
        </p>
        <p className="card-subtitle mb-2" name="studentExper">
          experience: {student.exper}
        </p>
        <p className="card-text" name="studentAbout">
          {student.about}
        </p>
        <p className="card-subtitle mb-2" name="studentPhone">
          phone: {student.phone}
        </p>
        <p className="card-subtitle mb-2" name="studentEmail">
          email: {student.email}
        </p>
        {user && user.id === student.userId && (
          <div>
            <a
              href={`/students/${student.id}`}
              data-id={student.id}
              className="card-link-edit"
            >
              Edit
            </a>
            <div className="edit">
              <div className="form-text">Insert yout changes to the form</div>
              <form
                action={`/students/${student.id}`}
                className="edit-form-student"
              >
                <div className="mb-3">
                  <input
                    type="text"
                    name="firstName"
                    defaultValue={student.firstName}
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
                    defaultValue={student.secondName}
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
                    defaultValue={student.age}
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
                    defaultValue={student.exper}
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
                    defaultValue={student.about}
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
                    defaultValue={student.phone}
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
                    defaultValue={student.email}
                    className="form-control"
                    id="input-email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div id="feedback" className="feedback" />
                <button type="submit" className="edit-save btn btn-primary">
                  Save
                </button>
              </form>
            </div>
            <br />
            <a
              href={`students/${student.id}`}
              data-id={student.id}
              className="card-link-delete"
            >
              Delete
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

module.exports = StudentPage;
