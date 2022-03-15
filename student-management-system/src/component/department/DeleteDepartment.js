import { useState } from "react";
import { deleteDepartment } from "../../service";

const DeleteDepartment = () => {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteDepartment(e.target.departmentId.value)
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
          <div className="form-group mr-4">
            <input
              type="text"
              className="form-control"
              name="departmentId"
              placeholder="Department Id"
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
          <span className="badge badge-success">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default DeleteDepartment;
