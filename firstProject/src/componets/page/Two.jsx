import React from "react";
import { replace, useNavigate } from "react-router";

export default function Two() {
    const navigate = useNavigate()
    const value = 23
    const obj = {name:'jay',subject:"react"}
  return (
    <div>
      <h1>Two</h1>
        <button onClick={()=>navigate(`/three/${value}` )}> Go to Three</button>
        <button onClick={()=>navigate(`/three`,{replace:true,state : obj})}> Go to with dif way toThree</button>
    </div>
  );
}
