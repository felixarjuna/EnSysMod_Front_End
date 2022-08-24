import React from "react";
import axios from "axios";
import { useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useState } from "react";
import Collapsible from "react-collapsible";

function DatasetItem(props) {
  const triggerStyle = {
    fontSize: "1.0rem",
    display: "flex",
  };
  return (
    <Collapsible trigger={props.name} triggerStyle={triggerStyle}>
      <div className="list-item">
        Name: {props.name}
        <br></br>ID: {props.id}
      </div>
    </Collapsible>
  );
}

function ListDataset() {
  const { token, datasetID } = useContext(UserContext);
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    function getDataset() {
      axios
        .get("http://localhost:8080/datasets/", { headers })
        .then((res) => {
          setDataset((prevValue) => {
            return [...prevValue, res.data];
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setTimeout(() => {
      getDataset();
    }, 5000);
  }, [datasetID]);

  return (
    <div className="sidebar-list">
      <Collapsible trigger="Datasets">
        <ul>
          {dataset[0]?.map((data) => (
            <DatasetItem name={data.name} id={data.id} key={data.id} />
          ))}
        </ul>
      </Collapsible>
    </div>
  );
}

export default ListDataset;
