import React from "react";
import Dataset from "./Form/Dataset";
import Model from "./Form/Model";
import OptimizeModel from "./Form/OptimizeModel";

function Sidebar() {
  return (
    <section className="pane sidebar">
      <div className="sidebar-header">
        <div className="dataset">
          <h3>New Dataset</h3>
          <Dataset />
        </div>
        <div className="model">
          <h3>New Model</h3>
          <Model />
          <h3>Optimize Model</h3>
          <OptimizeModel />
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
