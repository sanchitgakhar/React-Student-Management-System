import React, {Component, useEffect, useState} from "react";
import api from "../../api/api";

const DisplayTeacher=()=>{

  const [teacher,setTeacher]=useState([])

  useEffect(   async ()=>{
    const res= await api.get("/teachers")
    setTeacher(res.data)
  },[])

    return (
      <div class="container">
        <div class="row">
          <div className="col-md-12 mt-4">
            <table className="table table-bordered table-hover">
              <caption>Teacher Details</caption>
              <thead className="thead-light">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Subject</th>
                </tr>
              </thead>
              <tbody>
                {teacher.map((c) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.teacherName}</td>
                      <td>{c.deptId}</td>
                      <td>{c.subjectId}</td>
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

export default DisplayTeacher;
