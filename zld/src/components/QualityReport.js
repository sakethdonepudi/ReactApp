import React from "react";
import "./QualityReport.css";

const QualityReport = () => {
  return (
    <div className="quality-report">
      <h2>QUALITY REPORT</h2>
      <div className="gauge-section">
        <div className="gauge">
          {/* Placeholder for Gauge */}
          <img src="/gauge.png" alt="Gauge" />
        </div>
        <div className="quality-values">
          <div>
            <h3>80.64</h3>
            <p>Total ETP Recovery</p>
          </div>
          <div>
            <h3>60.44</h3>
            <p>Total WTP Recovery</p>
          </div>
        </div>
      </div>
      <div className="report-buttons">
        <button>Modulewise Report - Process</button>
        <button>List Report - Process</button>
      </div>
    </div>
  );
};

export default QualityReport;
