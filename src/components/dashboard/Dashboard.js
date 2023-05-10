import MenuIcon from "@mui/icons-material/Menu";
import { ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import dayjs from "dayjs";
import PropTypes from "prop-types";
import * as React from "react";
// import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
// import Calendar from "../calendar/Calendar";
// import DataTable from "./DataTable/DataTable";

const drawerWidth = 240;

function Dashboard(props) {
  // const { currentUser } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [value, setValue] = React.useState(dayjs(new Date()));
  // const [appointments, setAppointments] = React.useState([]);
  // const email = currentUser.email;

  const { admin } = useAuth();

  // useEffect(() => {
  //   fetch(
  //     `http://localhost:2020/appointments?email=${email}&date=${value.$d.toLocaleDateString()}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setAppointments(data));
  // }, [email, value]);

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Link style={{ color: "blue" }} to="/appointment">
        Appointment
      </Link>
      <Divider />
      <List>
      <Link to="/">
          <ListItem disablePadding style={{ color: "black" }}>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/dashboard/dashboardSchedule">
          <ListItem disablePadding style={{ color: "black" }}>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
        </Link>

        {admin && (
          <Link to="/dashboard/makeAdmin">
            <ListItem disablePadding style={{ color: "black" }}>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Make Admin"} />
              </ListItemButton>
            </ListItem>
          </Link>
        )}
        {admin && (
          <Link to="/dashboard/addDoctor">
            <ListItem disablePadding style={{ color: "black" }}>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Add a Doctor"} />
              </ListItemButton>
            </ListItem>
          </Link>
        )}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>

        {/* <Calendar date={value} handleChange={handleChange}></Calendar>
        <br />
        <DataTable appointments={appointments}></DataTable> */}
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
