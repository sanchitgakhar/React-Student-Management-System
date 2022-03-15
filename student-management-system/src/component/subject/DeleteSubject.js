const DeleteSubject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.subjectId.value);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <form onSubmit={(e) => handleSubmit(e)} className="col-md-4 mt-4">
          <div className="form-group mr-4">
            <input
              type="text"
              className="form-control"
              name="subjectId"
              placeholder="Subject Id"
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

export default DeleteSubject;
