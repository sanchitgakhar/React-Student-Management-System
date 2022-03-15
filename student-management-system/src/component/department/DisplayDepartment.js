import React, { Component } from "react";

class DisplayDepartment extends Component {
  render() {
    return (
      <div className="col-md-12 mt-4">
        {this.props.department.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.department.map((c) => {
                return (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
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

export default DisplayDepartment;
