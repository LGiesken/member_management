import React, { Component } from "react";
import "../../index.css";

class DataBox extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="dataBox">
          <div className="dataBoxHeading">
            <p>Meine offenen Termine</p>
          </div>
          <table>
            <tbody className="dataBoxBody">
              <tr>
                <td>Heute</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Morgen</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default DataBox;
