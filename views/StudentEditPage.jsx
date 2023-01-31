const React = require('react');
const Layout = require('./Layout');

function StudentEditPage({ title, student, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="form-text">Insert yout changes to the form</div>
      <form action={`/students/${student.id}`} id="edit-form-student">
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
    </Layout>
  );
}

module.exports = StudentEditPage;
