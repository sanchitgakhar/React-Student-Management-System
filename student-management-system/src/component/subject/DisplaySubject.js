import React, { Component } from "react";

class DisplaySubject extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-12 mt-4">
        {this.props.subject.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {this.props.subject.map((c) => {
                return (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>{c.department}</td>
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

export default DisplaySubject;
