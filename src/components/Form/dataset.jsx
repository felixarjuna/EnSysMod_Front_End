import React from "react";
import { useState } from "react";
import axios from "axios";

function Dataset() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjA4MzgyMjUsInN1YiI6IjEifQ.stHGynNav-VPyW4ykvuQzWFyd83LiMXFyXAe8Cf43sI";

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const [success, setSuccess] = useState(false);

  const [dataset, setDataset] = useState({
    name: "",
    description: "",
    hours_per_time_step: "1",
    number_of_time_step: "8760",
    cost_unit: "€",
    length_unit: "km",
    ref_created_by: 0,
  });

  const [fileUpload, setFileUpload] = useState(false);
  const [file, setFile] = useState();

  function handleChange(event) {
    const { name, value } = event.target;
    setDataset((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleFile(event) {
    const newFile = event.target.files[0];
    setFile(newFile);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:8080/datasets/", dataset, { headers })
      .then((res) => {
        if (res.status === 200) {
          const dataset_id = res.data.id;
          // Define specific header
          const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": file.type,
          };

          const formData = new FormData();
          formData.append("file", file);

          axios
            .post(
              `http://localhost:8080/datasets/${dataset_id}/upload`,
              formData,
              {
                headers,
              }
            )
            .then((res) => {
              if (res.status === 200) {
                setFileUpload(true);
                setSuccess(true);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setDataset({
      name: "",
      description: "",
      hours_per_time_step: "1",
      number_of_time_step: "8760",
      cost_unit: "€",
      length_unit: "km",
      ref_created_by: 0,
    });
  }

  return (
    <form className="sidebar-form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          name="name"
          onChange={handleChange}
          value={dataset.name}
          type="text"
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          name="description"
          onChange={handleChange}
          value={dataset.description}
          type="text"
        />
      </label>
      <label htmlFor="hours_per_time_step">
        Hours per time step
        <input
          name="hours_per_time_step"
          onChange={handleChange}
          type="text"
          value={dataset.hours_per_time_step}
        />
      </label>
      <label htmlFor="number_of_time_step">
        Number of time step
        <input
          name="number_of_time_step"
          onChange={handleChange}
          type="text"
          value={dataset.number_of_time_step}
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
      <label htmlFor="length_unit">
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
        <input name="upload" onChange={handleFile} type="file" />
      </label>
      {fileUpload ? (
        <p className="response-success">Upload dataset succesfull!</p>
      ) : (
        ""
      )}
      <button className="button" type="submit">
        +
      </button>
      {success ? (
        <p className="response-success">Dataset successfully created!</p>
      ) : (
        ""
      )}
    </form>
  );
}

export default Dataset;
