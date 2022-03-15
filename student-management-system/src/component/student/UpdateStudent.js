import {updateStudent} from "../../service";

const UpdateStudent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(
        Number(e.target.studentId.value),
        e.target.studentName.value,
        Number(e.target.subjectId.value),
        Number(e.target.teacherId.value),
        Number(e.target.departmentId.value)
    )
        .then((result) => {
          setResult("Success");
        })
        .catch((error) => {
          console.log(error);
        });
    setTimeout(() => setResult(""), 2000);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <form onSubmit={(e) => handleSubmit(e)} className="col-md-4 mt-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="studentId"
              placeholder="Student Id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="studentName"
              placeholder="Student Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subjectId"
              placeholder="Subject Id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="teacherId"
              placeholder="Teacher Id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="departmentId"
              placeholder="Department Id"
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
