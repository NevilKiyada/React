import React, { useState } from "react";

export default function LocalCrud() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const [record, setRecord] = useState([]);

  const hdlsmt = () => {
    let obj = { id:Date.now(),name, email, city, gender };
    setRecord([...record, obj]);
    setName("");
    setCity("");
    setEmail("");
    setGender("");
  };
  console.log(name, email, gender, city);

  function hdldel(id){
    const modirec = record.filter((item)=> item.id != id )
    setRecord(modirec)
  }
  return (
    <div>
      <label htmlFor="">enter Your name : </label>
      <input
        type="text"
        placeholder="enter your name "
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="">enter Your Email : </label>
      <input
        type="text"
        placeholder="enter your email "
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="radio"
        name="gen"
        value={"male"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="">Male</label>
      <input
        type="radio"
        name="gen"
        value={"female"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="">Female</label> <br />
      <label htmlFor="">Select Your City</label>
      <select name="" id="" onChange={(e) => setCity(e.target.value)}>
        <option value="Rajkot">Rajkot</option>
        <option value="Punjab">Punjab</option>
        <option value="Surat">Surat</option>
      </select>
      <br />
      <button onClick={hdlsmt}>Submit</button>
      <table border="2" width="80%">
        <tr>
          <th>sr. No.</th>
          <th>Name.</th>
          <th>Email</th>
          <th>Gender</th>
          <th>CIty</th>
          <th colSpan="2">Actions</th>
        </tr>
        {record.map((e, i) => {
          return (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.gender}</td>
              <td>{e.city}</td>
              <td><button onClick={()=>hdldel(e.id)}>Delete</button></td>
              <td><button>Update</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
