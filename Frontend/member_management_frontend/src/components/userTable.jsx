import React, { Component } from "react";
import Table from "./common/table";
import { getMembers } from "../services/fakeMemberService";

class UserTable extends Component {
  columns = [
    { name: "_id", title: "User-Id" },
    { name: "first_name", title: "Vorname" },
    { name: "last_name", title: "Nachname" },
    { name: "email", title: "Email" },
    { name: "location", title: "Ort" },
  ];

  render() {
    return <Table columns={this.columns} data={getMembers()}></Table>;
  }
}

export default UserTable;
