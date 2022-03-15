import { useState } from "react";
import { updateDepartment } from "../../service";

const UpdateDepartment = () => {

  const [result, setResult] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    updateDepartment(Number(e.target.departmentId.value), e.target.departmentName.value)
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
              name="departmentId"
              placeholder="Department Id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="departmentName"
              placeholder="Department Name"
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

export default UpdateDepartment;
