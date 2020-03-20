import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { FaMusic } from 'react-icons/fa';

import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaItunes } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaLastfm } from "react-icons/fa";

import metallica from "../data/mettalica";
import "./TestMaterialUI.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: '200%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 10,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();
  
  return (
    <div class="h1">
          <h1>Metallica Songs  <FaMusic /> </h1>
    <div>

    <div class="AppMet"><a target="_blank" style={{color: 'red'}} href={metallica.urlYouTube}><FaYoutube /></a> <a target="_blank" style={{color: 'green'}} href={metallica.urlSpotify}><FaSpotify /></a> <a target="_blank" style={{color: 'purple'}} href={metallica.urlITunes}><FaItunes /></a> <a target="_blank" style={{color: 'orange'}} href={metallica.urlSoundCloud}><FaSoundcloud /></a> <a target="_blank" style={{color: 'red'}} href={metallica.urlLastFm}><FaLastfm/></a></div>
    &nbsp;&nbsp;&nbsp;
    {metallica.albums.map(album => (
     <div>
       {(() => {
              if (album.cover !== undefined) {
                   return <div class="Mrta"><img src={album.cover.medium}/></div>;
              }
     })()}
          <div class="Mta">
          <List className={classes.root} subheader={<li />}>
              <li  className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader>{album.title}</ListSubheader>
                  {album.songs.map(song => (
                    <ListItem key={{}-{}}>
                     <a class="root1" href={song.urlSong} target="_blank"> <ListItemText primary={song.title} /></a>
                    </ListItem>
                  ))}
                </ul>
              </li>
          </List>
       </div>
    </div>
  ))}
  </div>
</div>
  );
}
