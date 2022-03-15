import { useState } from "react";
import { addDepartment } from "../../service";

const AddDepartment = () => {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDepartment(e.target.departmentName.value)
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
              name="departmentName"
              placeholder="Department Name"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
          <span className="badge badge-success">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
