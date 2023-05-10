import React from "react";

const Doctor = ({ doctor }) => {
  const { name, email, image } = doctor;

  return (
    <div>
      <img
        src={`data:image/png;base64,${image}`}
        alt=""
        style={{ width: "13rem", height: "13rem", objectFit: "cover" }}
      />
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
};

export default Doctor;
