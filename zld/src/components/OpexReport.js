import React from "react";
import "./OpexReport.css";

const OpexReport = () => {
  return (
    <div className="opex-report">
      <h2>OPEX REPORT</h2>
      <div className="chart">
        {/* Placeholder for Pie Chart */}
        <img src="/pie-chart.png" alt="Pie Chart" />
      </div>
      <ul className="legend">
        <li>Chemicals</li>
        <li>Electricity Consumption</li>
        <li>Sludge Disposal</li>
        <li>Utilities</li>
      </ul>
      <div className="report-buttons">
        <button>Modulewise Report - Opex</button>
        <button>List Report - Opex</button>
      </div>
    </div>
  );
};

export default OpexReport;
