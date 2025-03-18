import React from "react";
import { useLocation } from "react-router";

export default function Three() {
  const data = useLocation()
  console.log(data.state.name);
  
  return (
    <div>
      <h1>Three</h1>
      <h1>{data.state.name}</h1>
    </div>
  );
}
