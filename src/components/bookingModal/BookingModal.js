import { Button, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { animated, useSpring } from "@react-spring/web";
import PropTypes from "prop-types";
import * as React from "react";
import { useAuth } from "../../contexts/AuthContexts";
import "./BookingModal.css";


const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BookingModal({ handleClose, open, date, schedule, service}) {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const {currentUser}=useAuth()
  const [email,setEmail]=React.useState(currentUser.email)
  const [phone,setPhone]=React.useState()
  const [name,setName]=React.useState(currentUser.displayName)

  const bookingSubmit=()=>{
    const patientDetails={
      name,phone,email,date:date.toLocaleDateString(),schedule,service
    }
    fetch(`http://localhost:2020/appointments`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(patientDetails)
    })
    alert("Booking is successful")
    console.log(patientDetails)
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" style={{color:"#29b6f6", textAlign:"center", fontWeight:"bold"}} variant="h6" component="h6">
              {date.toLocaleDateString()}: {weekday[date.getDay()]}
            </Typography>
            <Typography style={{textAlign:"center"}} id="spring-modal-title" variant="h6" component="h3">
                Click Confirm to Set Appointment
            </Typography>
            <br />
            <TextField
              className="modalTextField"
              id="standard-multiline-flexible"
              label="Schedule"
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={schedule}
            />
            <br /> <br />
            <TextField
              className="modalTextField"
              id="standard-multiline-flexible"
              label="Schedule"
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={service}
            />
            <br /> <br />
            <TextField
              className="modalTextField"
              id="standard-multiline-flexible"
              label="Enter Name"
              variant="standard"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <br /> <br />
            <TextField
              className="modalTextField"
              id="standard-multiline-flexible"
              label="Enter Email"
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              defaultValue={email}
            />
            <br /> <br />
            <TextField
              className="modalTextField"
              id="standard-multiline-flexible"
              label="Enter Phone"
              variant="standard"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              required
            />
            
            <br />
            <br />
            <Button onClick={bookingSubmit}>Confirm Book </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
