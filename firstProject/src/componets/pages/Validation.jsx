import React, { useState } from "react";

export default function Validation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [ner ,setNer] = useState();
  const [eer , setEer] = useState();
  const [numer , setNumer] = useState();


  const handlSub = (e) => {
    e.preventDefault();
    if (name == ""){
        setNer("please enter a name");
    }
    if(email == ""){
        setEer("please enter an email");
    }   
    if(number == ""){
        setNumer("Please enter a number");
    }
 
  };
  return (
    <div>
      <form onSubmit={handlSub}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <span>{ner}</span>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>{eer}</span>   
        <input
          type="text"
          placeholder="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <span>{numer}</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
