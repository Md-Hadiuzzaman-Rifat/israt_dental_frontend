import TextField from '@mui/material/TextField';
import { MuiFileInput } from "mui-file-input";
import React, { useState } from "react";
import Button from "../../button/Button";

const AddDoctor = () => {
  const [file, setFile] = React.useState(null);
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', file);

    console.log(formData)

    fetch('http://localhost:2020/dashboard/addDoctor',{
        method:'POST',
        body:formData
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  };

  return (
    <div>
      <h2>Add Doctor</h2>

      <form onSubmit={handleSubmit}>
        <TextField style={{width:"80%"}} id="standard-basic" label="Enter Name" onChange={(e)=>setName(e.target.value)} variant="standard" />
        <TextField style={{width:"80%"}} id="standard-basic" label="Enter Email" onChange={(e)=>setEmail(e.target.value)} variant="standard" />
        <br />
        <MuiFileInput
          value={file}
          placeholder="Upload Image"
          style={{width:"70%"}}
          onChange={(newFile) => setFile(newFile)}
        />
        <Button type="Submit">Submit Form</Button>
      </form>
    </div>
  );
};
export default AddDoctor;
