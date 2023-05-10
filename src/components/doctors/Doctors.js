import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import * as React from "react";
import { useState } from "react";
import Doctor from "./Doctor";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:2020/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, [doctors]);

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        {console.log(doctors)}

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {doctors?.map((doctor) => (
            <Grid item xs={2} sm={4} md={4} key={doctor._id}>
              <Item>
                <Doctor doctor={doctor}></Doctor>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
