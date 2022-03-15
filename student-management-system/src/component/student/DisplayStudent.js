import React, { Component } from "react";

class DisplayStudent extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-12 mt-4">
        {this.props.student.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
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
                    <td>{c.subject}</td>
                    <td>{c.teacher}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default DisplayStudent;
