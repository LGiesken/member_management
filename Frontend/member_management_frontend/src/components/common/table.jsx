import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    const { columns, data, sortedColumn, raiseSort } = this.props;
    return (
      <React.Fragment>
        <table className="table table-striped">
          <TableHeader
            raiseSort={raiseSort}
            sortedColumn={sortedColumn}
            columns={columns}
          />

          <TableBody data={data} columns={columns} />
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
