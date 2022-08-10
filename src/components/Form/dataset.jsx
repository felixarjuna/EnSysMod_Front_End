import React from "react";
import { useState } from "react";

function Dataset() {
  const [dataset, setDataset] = useState({
    name: "",
    description: "",
    hours_per_time_step: "",
    number_of_time_step: "",
    cost_unit: "",
    length_unit: "",
    ref_created_by: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDataset((prevValue) => {
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
          value={dataset.name}
          type="text"
        />
      </label>
      <label htmlFor="">
        Description
        <input
          name="description"
          onChange={handleChange}
          value={dataset.description}
          type="text"
        />
      </label>
      <label htmlFor="">
        Hours per time step
        <input
          name="hours_per_time_step"
          onChange={handleChange}
          type="text"
          value={dataset.hours_per_time_step}
        />
      </label>
      <label htmlFor="">
        Cost unit
        <input
          name="cost_unit"
          onChange={handleChange}
          value={dataset.cost_unit}
          type="text"
        />
      </label>
      <label htmlFor="">
        Length unit
        <input
          name="length_unit"
          onChange={handleChange}
          value={dataset.length_unit}
          type="text"
        />
      </label>
      <label htmlFor="">
        Upload Zip Archive
        <input name="upload" onChange={handleChange} type="file" />
      </label>
      <button className="button">+</button>
    </form>
  );
}

export default Dataset;
