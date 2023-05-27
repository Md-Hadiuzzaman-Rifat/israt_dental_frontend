import TextField from '@mui/material/TextField';
import { MuiFileInput } from "mui-file-input";
import React, { useState } from "react";
import Button from "../../button/Button";

const AddDoctor = () => {
  const [file, setFile] = React.useState(null);
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [success, setSuccess] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', file);

    console.log(formData)

    fetch('https://israt-dental-backend-git-master-md-hadiuzzaman-rifat.vercel.app/dashboard/addDoctor',{
        method:'POST',
        body:formData
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        setSuccess("Doctor added successfully")
        console.log("Added successfully")
      }
    })
    .catch(err=>console.log(err))
    setName("")
    setEmail("")
    setFile(null)
  };

  return (
    <div>
      <h2>Add Doctor</h2>

      <form onSubmit={handleSubmit}>
        <TextField style={{width:"80%"}} id="standard-basic" label="Enter Name" onChange={(e)=>setName(e.target.value)} variant="standard" />
        <TextField style={{width:"80%", margin:"15px 0"}} id="standard-basic" label="Enter Email" onChange={(e)=>setEmail(e.target.value)} variant="standard" />
        <br />
        <MuiFileInput
          value={file}
          placeholder="Upload Image"
          style={{width:"70%"}}
          onChange={(newFile) => setFile(newFile)}
        />
        <Button type="Submit">Add Doctor</Button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};
export default AddDoctor;
