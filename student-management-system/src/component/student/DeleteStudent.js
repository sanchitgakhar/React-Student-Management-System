import {deleteStudent} from "../../service";
import {useState} from "react";

const DeleteStudent = () => {
    const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    deleteStudent(Number(e.target.studentId.value))
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
              name="studentId"
              placeholder="Student Id"
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteStudent;
