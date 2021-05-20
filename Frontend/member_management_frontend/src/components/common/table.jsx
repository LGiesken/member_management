import React, { Component } from "react";

class Table extends Component {
  createKey = (member, column) => {
    return member._id + column.name;
  };

  render() {
    const { columns, data } = this.props;
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.name}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((member) => (
              <tr key={member._id}>
                {columns.map((column) => (
                  <td key={this.createKey(member, column)}>
                    {member[column.name]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
