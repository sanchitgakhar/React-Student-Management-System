import { useState } from "react";
import { updateSubject } from "../../service";

const UpdateSubject = () => {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubject(
      Number(e.target.subjectId.value),
      e.target.subjectName.value,
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
              name="subjectId"
              placeholder="Subject Id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subjectName"
              placeholder="Subject Name"
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
          <span className="badge badge-success">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default UpdateSubject;
