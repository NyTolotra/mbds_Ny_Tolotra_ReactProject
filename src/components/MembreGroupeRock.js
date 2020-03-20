import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const MembreGroupeRock = ({ membre }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {membre.realName}
    </TableCell>
    <TableCell component="th" scope="row" className="first1 ">
      {membre.abstract}
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.birthDate}
      </TableCell>
      <TableCell component="th" scope="row">
      {membre.instruments}
      </TableCell>
    
  </TableRow>
);

export default MembreGroupeRock;
