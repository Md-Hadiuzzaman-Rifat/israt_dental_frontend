import { Alert, Textarea } from "@mui/joy";
import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContexts";
import Button from "../../button/Button";

const MakeAdmin = () => {
  const { admin, email, token } = useAuth();
  const [adminEmail,setAdminEmail]=useState('')
  const [success,setSuccess]=useState(false)


  function handleSubmit(e){
    console.log(token)
    fetch('https://israt-dental-backend-git-master-md-hadiuzzaman-rifat.vercel.app/users/makeAdmin', {
        method: 'PUT',
        headers: {
            'authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email:adminEmail})
    })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount) {
              console.log(data);
              setAdminEmail('')
              setSuccess(true);
          }
      })

    e.preventDefault()
  }

  return (
    <div>
      <br />
      <h2>Enter Email to Make Admin</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div style={{ width: "65%", margin: "auto" }}>
          <Textarea
            name="Outlined"
            placeholder="Add Email"
            variant="outlined"
            type="email"
            onChange={(e)=>setAdminEmail(e.target.value)}
          />{" "}
          <br />
        </div>
        <Button type="submit">Add Admin</Button>
      </form>
      <br />
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
