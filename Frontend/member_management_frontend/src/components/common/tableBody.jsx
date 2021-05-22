import React, { Component } from "react";

class TableBody extends Component {
  createKey = (entry, column) => {
    return entry._id + column.name;
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((entry) => (
          <tr key={entry._id}>
            {columns.map((column) => (
              <td key={this.createKey(entry, column)}>{entry[column.name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
