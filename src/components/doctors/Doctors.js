import { CircularProgress } from "@mui/material";
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
  const [loading ,setLoading]=useState(true)

  React.useEffect(() => {
    fetch(
      "https://israt-dental-backend-git-master-md-hadiuzzaman-rifat.vercel.app/doctors"
    )
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .then(()=>setLoading(false))
  }, []);

  return (
    <Container style={{ marginBottom: "100px" }}>
      <Box sx={{ flexGrow: 1 }}>
        {loading && <CircularProgress />}
        {!loading && (
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
        )}
      </Box>
    </Container>
  );
}
