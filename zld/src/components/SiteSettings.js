import React from "react";
import "./SiteSettings.css";

const SiteSettings = () => {
  return (
    <div className="site-settings">
      <h2>SITE SETTINGS</h2>
      <p>ZLD<br />3*20 grid | 25 Modules</p>
      <button>View PFD</button>
      <button>Edit Site Settings</button>
      <button>Download PFD</button>
    </div>
  );
};

export default SiteSettings;
