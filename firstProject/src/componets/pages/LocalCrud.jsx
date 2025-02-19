// import React, { useState } from "react";

// export default function LocalCrud() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [gender, setGender] = useState("");

//   const [record, setRecord] = useState([]);

//   const hdlsmt = () => {
//     let obj = { id:Date.now(),name, email, city, gender };
//     setRecord([...record, obj]);
//     setName("");
//     setCity("");
//     setEmail("");
//     setGender("");
//   };
//   console.log(name, email, gender, city);

//   function hdldel(id){
//     const modirec = record.filter((item)=> item.id != id )
//     setRecord(modirec)
//   }
//   return (
//     <div>
//       <label htmlFor="">enter Your name : </label>
//       <input
//         type="text"
//         placeholder="enter your name "
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <label htmlFor="">enter Your Email : </label>
//       <input
//         type="text"
//         placeholder="enter your email "
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <input
//         type="radio"
//         name="gen"
//         value={"male"}
//         onChange={(e) => setGender(e.target.value)}
//       />
//       <label htmlFor="">Male</label>
//       <input
//         type="radio"
//         name="gen"
//         value={"female"}
//         onChange={(e) => setGender(e.target.value)}
//       />
//       <label htmlFor="">Female</label> <br />
//       <label htmlFor="">Select Your City</label>
//       <select name="" id="" onChange={(e) => setCity(e.target.value)}>
//         <option value="Rajkot">Rajkot</option>
//         <option value="Punjab">Punjab</option>
//         <option value="Surat">Surat</option>
//       </select>
//       <br />
//       <button onClick={hdlsmt}>Submit</button>
//       <table border="2" width="80%">
//         <tr>
//           <th>sr. No.</th>
//           <th>Name.</th>
//           <th>Email</th>
//           <th>Gender</th>
//           <th>CIty</th>
//           <th colSpan="2">Actions</th>
//         </tr>
//         {record.map((e, i) => {
//           return (
//             <tr key={i}>
//               <td>{e.id}</td>
//               <td>{e.name}</td>
//               <td>{e.email}</td>
//               <td>{e.gender}</td>
//               <td>{e.city}</td>
//               <td><button onClick={()=>hdldel(e.id)}>Delete</button></td>
//               <td><button>Update</button></td>
//             </tr>
//           );
//         })}
//       </table>
//     </div>
//   );
// }





import React, { useState } from "react";

export default function LocalCrud() {
  // State variables for form inputs
  const [name, setName] = useState(""); // Stores the name input
  const [email, setEmail] = useState(""); // Stores the email input
  const [city, setCity] = useState(""); // Stores the selected city
  const [gender, setGender] = useState(""); // Stores the selected gender
  const [idx, setIdx] = useState(null); // Stores the index of the selected element

  // State variable to manage the list of records
  const [record, setRecord] = useState([]);

  // Function to handle form submission
  const hdlsmt = () => {
    // Create a new object with the form data and a unique ID based on timestamp
    let obj = { id: Date.now(), name, email, city, gender };

    // Add the new record to the record array
    setRecord([...record, obj]);

    // Reset form inputs after submission
    setName("");
    setCity("");
    setEmail("");
    setGender("");
  };

  const hdlupd = () => {
    let upd = record.find((item) => item.id == idx)
    upd.name = name;
    upd.email = email;
    upd.city = city;
    upd.gender = gender;
    
    setRecord([...record]);
    // setRecord(upd);  

  }

  // Log current form inputs (for debugging purposes)
  // console.log(name, email, gender, city);

  // Function to handle record deletion
  function hdldel(id) {
    // Filter out the record with the specified ID
    const modirec = record.filter((item) => item.id !== id);
    setRecord(modirec);
  }
  function hdledit(id) {
    console.log(id);
    const oldrecord = record.find((item) => item.id == id);
    // it fill values in input tags
    setName(oldrecord.name)
    setCity(oldrecord.city)
    setEmail(oldrecord.email)
    setGender(oldrecord.gender)

    setIdx(id);


  }

  return (
    <div>
      {/* Input field for Name */}
      <label htmlFor="">Enter Your Name: </label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      {/* Input field for Email */}
      <label htmlFor="">Enter Your Email: </label>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      {/* Radio buttons for Gender selection */}
      <input
        type="radio"
        name="gen"
        value="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label>Male</label>
      <input
        type="radio"
        name="gen"
        value="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label>Female</label>
      <br />

      {/* Dropdown menu for City selection */}
      <label>Select Your City: </label>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="Rajkot">Rajkot</option>
        <option value="Punjab">Punjab</option>
        <option value="Surat">Surat</option>
      </select>
      <br />

      {/* Submit button */}
      <button onClick={hdlsmt}>Submit</button>
      <button onClick={hdlupd}>Update</button>
     

      {/* Table to display records */}
      <table border="2" width="80%">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>City</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through the records array to display each record */}
          {record.map((e, i) => {
            return (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.gender}</td>
                <td>{e.city}</td>
                <td>
                  {/* Button to delete the record */}
                  <button onClick={() => hdldel(e.id)}>Delete</button>
                </td>
                <td>
                  {/* Placeholder Update button (no functionality yet) */}
                  <button onClick={()=> hdledit(e.id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
