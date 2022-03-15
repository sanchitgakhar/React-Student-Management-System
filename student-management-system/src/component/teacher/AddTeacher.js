import {addTeacher} from "../../service";

const AddTeacher = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    addTeacher(e.target.teacherName.value, Number(e.target.departmentId.value),Number(e.target.subjectId.value))
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
              name="teacherName"
              placeholder="Teacher Name"
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
              name="departmentId"
              placeholder="Department Id"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
