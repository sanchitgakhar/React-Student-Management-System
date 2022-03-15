import React, {useEffect, useState} from "react";
import api from "../../api/api";

const DisplayStudent=()=>{

  const [student,setStudent]=useState([])

  useEffect(   async ()=>{
    const res= await api.get("/students")
    setStudent(res.data)
  },[])

    return (
      <div class="container">
        <div class="row">
          <div className="col-md-12 mt-4">
            <table className="table table-bordered table-hover">
              <caption>Student Details</caption>
              <thead className="thead-light">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                </tr>
              </thead>
              <tbody>
                {student.map((c) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.studentName}</td>
                      <td>{c.subjectId}</td>
                      <td>{c.teacherId}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default DisplayStudent;
