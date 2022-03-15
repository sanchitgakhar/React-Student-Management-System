import React, {useEffect, useState} from "react";
import api from "../../api/api";

const DisplaySubject=()=>{

  const [subject,setSubject]=useState([])
  const [dept,setDept]=useState([])

  useEffect(   async ()=>{
    const res= await api.get("/departments")
    setDept(res.data)
  },[])

  useEffect(   async ()=>{
    const res= await api.get("/subjects")
    let tempSubject = []
    res.data.map((data)=>{
      tempSubject.push(
          {
            id:data.id,
            subName:data.subName,
            dept: dept.filter((i)=>i.id===data.deptId)[0].deptName
          }
      )
    })
    setSubject(tempSubject)
  },[dept])

    return (
      <div class="container">
        <div class="row">
          <div className="col-md-12 mt-4">
            <table className="table table-bordered table-hover">
              <caption>Subject Details</caption>
              <thead className="thead-light">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {subject.map((c) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.subName}</td>
                      <td>{c.dept}</td>
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

export default DisplaySubject;
