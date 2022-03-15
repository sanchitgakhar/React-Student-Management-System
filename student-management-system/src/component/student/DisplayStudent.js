import React, { Component } from "react";

class DisplayStudent extends Component {
  state = {};
  render() {
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
                  <th>Department</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                </tr>
              </thead>
              <tbody>
                {this.props.student.map((c) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.name}</td>
                      <td>{c.department}</td>
                      <td>{c.subject}</td>
                      <td>{c.teacher}</td>
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
}

export default DisplayStudent;
