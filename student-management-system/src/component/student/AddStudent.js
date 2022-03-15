import {addStudent} from "../../service";
import {useState} from "react";

const AddStudent = () => {
  const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(e.target.studentName.value, Number(e.target.subjectId.value),Number(e.target.teacherId.value),Number(e.target.departmentId.value))
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
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
