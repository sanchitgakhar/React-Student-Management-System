import {deleteSubject, deleteTeacher} from "../../service";
import {useState} from "react";

const DeleteTeacher = () => {
    const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    deleteTeacher(Number(e.target.teacherId.value))
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
              name="teacherId"
              placeholder="Teacher Id"
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

export default DeleteTeacher;
