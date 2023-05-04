import { Textarea } from "@mui/joy";
import React from "react";
import { useAuth } from "../../../contexts/AuthContexts";
import Button from "../../button/Button";

const MakeAdmin = () => {
  const { admin } = useAuth();

  // console.log(email)

  async function handleSubmit(e){
    e.preventDefault()
    console.log("Hello World.")
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
          />{" "}
          <br />
        </div>
        <Button type="submit">Add Admin</Button>
      </form>
      
    </div>
  );
};

export default MakeAdmin;
