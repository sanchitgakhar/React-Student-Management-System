import React, {Component, useEffect, useState} from "react";
import api from "../../api/api";

const DisplayTeacher=()=>{

  const [teacher,setTeacher]=useState([])
  const [dept,setDept]=useState([])
  const [subject,setSubject]=useState([])

  useEffect(   async ()=>{
    const res= await api.get("/departments")
    setDept(res.data)
  },[])

  useEffect(   async ()=>{
    const res= await api.get("/subjects")
    setSubject(res.data)
  },[])

  useEffect(   async ()=>{
    const res= await api.get("/teachers")
    let tempTeacher = []
    res.data.map((data)=>{
      tempTeacher.push(
          {
            id:data.id,
            teacherName:data.teacherName,
            deptName: dept.filter((i)=>i.id===data.deptId)[0].deptName,
            subjectName: subject.filter((i)=>i.id===data.subjectId)[0].subName
          }
      )
    })
    setTeacher(tempTeacher)
  },[dept,subject])

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
                      <td>{c.deptName}</td>
                      <td>{c.subjectName}</td>
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
