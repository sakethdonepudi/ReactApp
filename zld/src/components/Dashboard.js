import React from "react";
import QualityReport from "./QualityReport";
import OpexReport from "./OpexReport";
import SiteSettings from "./SiteSettings";
import Uploads from "./Uploads";
import Alerts from "./Alerts";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>PURÉ BI</h1>
        <p>Updated On: 19-11-2024 22:25:25</p>
      </header>

      <div className="dashboard-grid">
        {/* Quality Report */}
        <div className="dashboard-item">
          <QualityReport />
        </div>

        {/* Opex Report */}
        <div className="dashboard-item">
          <OpexReport />
        </div>

        {/* Site Settings */}
        <div className="dashboard-item">
          <SiteSettings />
        </div>

        {/* Uploads */}
        <div className="dashboard-item">
          <Uploads />
        </div>

        {/* Alerts */}
        <div className="dashboard-item alerts">
          <Alerts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
