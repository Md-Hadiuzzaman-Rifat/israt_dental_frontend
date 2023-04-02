import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { Link } from "react-router-dom";

export default function DataTable({appointments}) {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'black'}}>
            <TableCell style={{color:'white',fontWeight:'bold'}}>Name</TableCell>
            <TableCell style={{color:'white',fontWeight:'bold'}}>Schedule</TableCell>
            <TableCell style={{color:'white',fontWeight:'bold'}}>Service</TableCell>
            <TableCell style={{color:'white',fontWeight:'bold'}}>Phone</TableCell>
            <TableCell style={{color:'white',fontWeight:'bold'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.schedule}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.service}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.phone}
              </TableCell>
              
              <TableCell><Link style={{color:"blue"}} to={`/appointment/bookingPayment/${row._id}`} >Pay Now</Link> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}