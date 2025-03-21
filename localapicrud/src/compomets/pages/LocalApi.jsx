import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LocalApi() {
  const [rac, setRac] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    FatchData();
  }, []);
  const FatchData = async () => {
    const rs = await axios.get("http://localhost:50000/products");
    console.log(rs.data);
    setRac(rs.data);
  };
  const hdladd = async () => {
    const obj = {name , price}
    const rs = await axios.post(`http://localhost:50000/products`, obj);
    setRac([...rac,obj]);
    setName("");
    setPrice("");
  }
  const hdldel = async (id)=>{
    const rs = await axios.delete(`http://localhost:50000/products/${id}`);
    const newrac = rac.filter((item)=> item.id!== id)
    setRac(newrac);
  }
  return (
    <div>
      <h1>API</h1>
      <input type="text" value={name} placeholder="eneter name " onChange={(e)=>setName(e.target.value)} />
      <input type="text" value={price} placeholder="Enter Price " onChange={(e)=>setPrice(e.target.value)}/>
      <button onClick={hdladd}>Add Item</button>
      {rac.map((e, i) => {
        return (
          <ul key={i}>
            <li>{e.name}</li>
            <li>{e.price}</li>
            <li><button onClick={()=>hdldel(e.id)}>Delete</button></li>
          </ul>
        );
      })}
    </div>
  );
}
