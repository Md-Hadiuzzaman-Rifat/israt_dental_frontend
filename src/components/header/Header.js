import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import bg from "../../images/bg.png";
import Chair from "../../images/chair.png";
import "./Header.css";

import { Button, Typography } from "@mui/material";
import cavity from "../../images/cavity.png";
import doctor from "../../images/doctor-small.png";
import fluoride from "../../images/fluoride.png";
import treatment from "../../images/treatment.png";
import whitening from "../../images/whitening.png";

export default function Header() {
  let background = {
    backgroundImage: `url("${bg}"), radial-gradient(circle at 18.7% 37.8%, rgb(280, 280, 280) 0%, rgb(228, 234, 238) 90%)`,
    backgroundPosition: "center",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div style={background}>
        <Container>
          <Grid
            container
            spacing={2}
            style={{
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid xs={4}>
              <div>
                <h2>Ortho Dental</h2>
                <p>
                Ortho Dental serves patients throughout Dhaka and the surrounding areas. It strives to help individuals protect and maintain their oral health by offering general dentistry services, including oral cancer screenings, dental hygiene, composite fillings, and extractions.
                </p>
              </div>
            </Grid>
            <Grid xs={8}>
              <img src={Chair} alt="" style={{ width: "80%" }} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        <div className="grid">
          <Grid className="grid_container">
            <Grid
              className="box"
              style={{ margin: "0 5px", padding: "15px 0", width: "28%" }}
              item
              xs={1}
              sm={4}
            >
              <h2>Health Care</h2>
            </Grid>
            <Grid
              className="box"
              style={{ margin: "0 5px", padding: "15px 0", width: "28%" }}
              item
              xs={1}
              sm={4}
            >
              <h2>Can Cure</h2>
            </Grid>
            <Grid
              className="box"
              style={{ margin: "0 5px", padding: "15px 0", width: "28%" }}
              item
              xs={1}
              sm={4}
            >
              <h2>Your Problem</h2>
            </Grid>
          </Grid>
        </div>
        <Box
          sx={{
            width: "25%",
            mx: "auto",
            borderTop: 4,
            borderColor: "primary.main",
            mt: 10,
            mb: 5,
          }}
        ></Box>
      </div>
      <div>
        <Container>
          <section>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 14 }}>
              Services We Provide
            </Typography>
            <Grid
              container
              rowSpacing={1}
              sx={{ mb: 10 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4}>
                <img src={cavity} alt="" />
                <h3>Tooth Decay</h3>
                <Typography>
                  Damage to a tooth's surface, which can lead to cavities
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img src={fluoride} alt="" />
                <h3>Impacted tooth</h3>
                <Typography>
                  Tooth did not erupt (break through the gum) when it should
                  have.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img src={whitening} alt="" />
                <h3>Abscess</h3>
                <Typography>
                  An abscess is a pocket of pus. You can get an abscess almost
                  anywhere in your body.
                </Typography>
              </Grid>
            </Grid>
          </section>
          <section style={{ marginTop: "150px" }}>
            <Grid
              container
              rowSpacing={4}
              sx={{ mb: 10 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={5}>
                <img src={treatment} alt="" style={{ width: "90%" }} />
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 8 }}>
                Dental check-ups
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  You may assume you should have a dental check-up every 6 months, but some people may not need to go so often and others
                  may need more frequent checks. Your dentist should suggest when you should have your next check-up based on how good your oral health is.
                </Typography>
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </section>
        </Container>
        <section
          style={{
            backgroundColor: "gray",
            height: "20rem",
            marginBottom: "100px",
            marginTop: "200px",
          }}
        >
          <Grid container rowSpacing={4}>
            <Grid item xs={5}>
              <img
                src={doctor}
                alt=""
                style={{ height: "70%", marginTop: "-92px" }}
              />
            </Grid>
            <Grid item xs={7}>
              <Typography
                sx={{ textAlign: "start" }}
                color="white"
                variant="h3"
              >
                At a Glance
              </Typography>
              <Typography sx={{ textAlign: "start" }} color="white">
              When it comes to oral healthcare, Cosmodent is a name you can count on. Since inception, we have been striving to offer excellent dental care solutions and treatments to our patients. We are a hi-tech, modern and ISO certified dental clinic in India, rendering a range of oral healthcare services. 
              </Typography>
            </Grid>
          </Grid>
        </section>
      </div>
    </div>
  );
}
