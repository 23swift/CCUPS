import React from 'react'
import { Typography, Toolbar, Fab, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import ConfigList from './../common/ConfigList';
import ConfigTestArea from './../common/ConfigTestArea';
import AppBar from '@material-ui/core/AppBar';
import  AddIcon from '@material-ui/icons/Add';
import useStyles from './../common/useStyles';
import MatchInfo from './../common/MatchInfo';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function createData(sq,fieldName, dataType, size, format, mappToSystem) {
    return {sq, fieldName, dataType, size, format, mappToSystem };
  }
  
  const rows = [
    createData(1,'recordType', 'Numeric', 3, '',  false),
    createData(2,'cardNumber', 'Numeric', 16, '', false),
    // createData(3,'name', 'Alpha Numeric', 30, '',false),
    // createData(4,'accountNumber', 'Numeric', 10,'', false),
    // createData(5,'amount', 'Decimal', 13, '0000000000000.00', false),
  ];
export default function HeaderConfig() {
  const classes = useStyles();
    return (
        <>
       
       
       
     
            <ConfigList title="Header Configuration" items={rows}/>
            <ConfigTestArea/>
            <MatchInfo/>
     
          
     
           
        </>
    )
}
