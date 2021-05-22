import React, { Component } from "react";
import Table from "./common/table";
import { getMembers } from "../services/fakeMemberService";
import _ from "lodash";

class UserTable extends Component {
  state = {
    sortedColumn: { name: "_id", direction: "asc" },
    members: [],
  };

  columns = [
    { name: "_id", title: "User-Id" },
    { name: "first_name", title: "Vorname" },
    { name: "last_name", title: "Nachname" },
    { name: "email", title: "Email" },
    { name: "location", title: "Ort" },
  ];

  sortData = (data) => {
    const { sortedColumn } = this.state;
    return _.orderBy(data, sortedColumn.name, sortedColumn.direction);
  };

  getMemberData = () => {
    const members = getMembers();

    const sorted = this.sortData(members);
    return sorted;
  };

  onSort = (columnName) => {
    const { sortedColumn } = this.state;

    if (sortedColumn.name !== columnName) {
      sortedColumn.name = columnName;
      sortedColumn.direction = "asc";
    } else if (sortedColumn.direction === "asc")
      sortedColumn.direction = "desc";
    else sortedColumn.direction = "asc";

    this.setState(sortedColumn);
  };

  render() {
    const data = this.getMemberData();

    return (
      <Table
        raiseSort={this.onSort}
        sortedColumn={this.state.sortedColumn}
        columns={this.columns}
        data={data}
      ></Table>
    );
  }
}

export default UserTable;
