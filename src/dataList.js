import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DataCard from "./dataCard";
import { CircularProgress } from "@mui/material";

function DataList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((res) => {
      let apiData = res.data;
      setUserData(apiData);
    });
}, []);

console.log(userData);
  return (userData.splice(0,5).map((data) => {
    <h2 key={data}> {data} </h2>;
  }))
}

export default DataList;
