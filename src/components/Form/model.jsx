import React from "react";
import { useState } from "react";

function Model() {
  const [model, setModel] = useState({
    name: "",
    description: "",
    ref_dataset: "",
    parameters: [],
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setModel((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  return (
    <form className="sidebar-form" action="">
      <label htmlFor="">
        Name
        <input
          name="name"
          onChange={handleChange}
          value={model.name}
          type="text"
        />
      </label>
      <label htmlFor="">
        Description
        <input
          name="description"
          onChange={handleChange}
          value={model.description}
          type="text"
        />
      </label>
      <label htmlFor="">
        Dataset reference id
        <input
          name="ref_dataset"
          onChange={handleChange}
          value={model.ref_dataset}
          type="text"
        />
      </label>
      <button className="button">+</button>
    </form>
  );
}

export default Model;
