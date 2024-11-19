import React from "react";
import "./Alerts.css";

const Alerts = () => {
  return (
    <div className="alerts">
      <h2>ALERTS</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Value</th>
            <th>Date-Time</th>
            <th>Open Since (Days)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Final Treated Water Quality</td>
            <td>Module</td>
            <td>7</td>
            <td>2024-11-19</td>
            <td>0</td>
            <td><button>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Alerts;
