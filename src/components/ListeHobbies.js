import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { FaFacebookSquare } from "react-icons/fa";
import { FaWikipediaW } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";

import "./ListeHobbies.css";

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";

const GroupeRock = () => {
  let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock metallica={m} key={index} />
  ));
  return (
    <TableContainer component={Paper}>
      <Table >
        <TableBody> 
          <div class="shadowbox" >
          <div class="first">
          <img src={metallica.picture.medium} />
          </div>
          <div class="second">
          <ul>
                <li><span>Birthdate &nbsp;&nbsp;&nbsp; 1981-10</span></li>
                &nbsp;&nbsp;&nbsp;
                <li><span> Number of Deezer fans &nbsp;&nbsp;&nbsp; 3445365</span></li>
                &nbsp;&nbsp;&nbsp;
                <li><span>Location &nbsp;&nbsp;&nbsp; {metallica.locationInfo}</span></li>
                &nbsp;&nbsp;&nbsp;
                <li><span>Genres &nbsp;&nbsp;&nbsp; {metallica.genres}</span></li>
                &nbsp;&nbsp;&nbsp;
                <li><span>Labels &nbsp;&nbsp;&nbsp; {metallica.labels}</span></li>
                &nbsp;&nbsp;&nbsp;
           </ul>
           </div>
          </div>
          
          <div class="h1">
          <h1>Metallica</h1>
          </div>
          <TableRow>
            <div class="shadowbox1"> 
            {metallica.abstract}
            &nbsp;&nbsp;&nbsp;
            <br/><br/><br/>
          </div>
          <div class="AppW"> <a target="_blank" style={{color: 'darkblue'}} href={metallica.urlFacebook}><FaFacebookSquare /></a>&nbsp;
          <a style={{color: 'black'}} target="_blank" href={metallica.urlWikipedia}><FaWikipediaW /></a>&nbsp;
          <a style={{color: 'skyblue'}} target="_blank" href={metallica.urlTwitter}><FaTwitterSquare /></a>&nbsp;
          <a style={{color: 'black'}} target="_blank" href={metallica.urlAmazon}><FaAmazon /></a></div>
        </TableRow>
     </TableBody>
    </Table>
</TableContainer>
  );
};

export default GroupeRock;
