import React from "react";
import { useNavigate } from "react-router";

export default function Two() {
    const navigate = useNavigate()
    const value = 23
  return (
    <div>
      <h1>Two</h1>
        <button onClick={()=>navigate(`/three/${value}`)}> Go to Three</button>
    </div>
  );
}
