import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TableHeader extends Component {
  renderSortIcon = (column) => {
    const { sortedColumn } = this.props;
    if (column.name !== sortedColumn.name) return null;
    if (sortedColumn.direction === "asc")
      return <FontAwesomeIcon icon="sort-up" />;
    return <FontAwesomeIcon icon="sort-down" />;
  };

  render() {
    const { columns, raiseSort } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.name} onClick={() => raiseSort(column.name)}>
              {this.renderSortIcon(column)}
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
