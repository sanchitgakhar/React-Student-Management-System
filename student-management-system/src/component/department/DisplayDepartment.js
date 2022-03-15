import React from "react";
import {useEffect,useState} from "react";
import api from "../../api/api";

const DisplayDepartment = (props) => {

    const [dept,setDept]=useState([])

    useEffect(   async ()=>{
        console.log("in use effect")
            const res= await api.get("/departments")
            console.log(res)
            setDept(res.data)
        },[])

    return (
      <div class="container">
        <div class="row">
          <div className="col-md-12 mt-4">
            <table className="table table-bordered table-hover">
              <caption>Department Details</caption>
              <thead className="thead-light">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {dept.map((c) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.id}</td>
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

export default DisplayDepartment;
