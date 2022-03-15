import React, {useEffect, useState} from "react";
import api from "../../api/api";

const DisplayStudent=()=>{

  const [student,setStudent]=useState([])
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
    setTeacher(res.data)
  },[])

  useEffect(   async ()=>{
    const res= await api.get("/students")
    let tempStudent = []
    res.data.map((data)=>{
      tempStudent.push(
          {
            id:data.id,
            studentName:data.studentName,
            deptName: dept.filter((i)=>i.id===data.deptId)[0].deptName,
            subjectName: subject.filter((i)=>i.id===data.subjectId)[0].subName,
            teacherName: teacher.filter((i)=>i.id===data.teacherId)[0].teacherName,
          }
      )
    })
    setStudent(tempStudent)
  },[dept,subject,teacher])


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
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {student.map((c) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.studentName}</td>
                      <td>{c.subjectName}</td>
                      <td>{c.teacherName}</td>
                      <td>{c.deptName}</td>
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
