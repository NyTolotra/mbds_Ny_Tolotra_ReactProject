import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./GroupeRock.css";

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";

const GroupeRock = () => {
  let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
  ));

  return (
    <TableContainer component={Paper}>
      <div >
          <img src={metallica.picture.medium} />
      </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date de naissance</TableCell>
            <TableCell>Instruments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{listeDesMembres}</TableBody>
      </Table>
      &nbsp;&nbsp;&nbsp;
    </TableContainer>
  );
};

export default GroupeRock;
