import React from "react";

function Editor() {
  return (
    <section>
      <div className="pane editor">
        <div>
          <h1>EnSysMod: Platform for Energy System Model</h1>
          <h3>Model </h3>
        </div>
        <div className="result">
          <div className="result-img">
            <img src="https://picsum.photos/500/400" alt="" />
          </div>
          <h3 className="result-header">Optimization Result</h3>
        </div>
      </div>
    </section>
  );
}

export default Editor;
