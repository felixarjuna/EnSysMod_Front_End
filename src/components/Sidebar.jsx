import React from "react";
import Dataset from "./Form/dataset";
import Model from "./Form/model";

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
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
