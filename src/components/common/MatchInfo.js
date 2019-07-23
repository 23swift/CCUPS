import React from 'react'
import useStyles from './useStyles';
import uniqueId from 'lodash/uniqueId';

import { Typography, List, ListItem, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';

    function creatematchData(pkid,fieldName, position, value, ) {
        return {pkid, fieldName, position, value, };
      }
      const matchRows1 = [
        creatematchData(1,'recordType', '0-3','110'),
        creatematchData(2,'cardNumber', '3-19', '	4183590135202100'),
        creatematchData(3,'name', '19-49', 'JHONATHAN CHUA PO     '),
        creatematchData(4,'accountNumber', '49-59','0750227686'),
        creatematchData(5,'amount', '59-72', '0000000006048'),
      ];
      const matchRows2 = [
        creatematchData(6,'recordType', '0-3','110'),
        creatematchData(7,'cardNumber', '3-19', '	4183590135202100'),
        creatematchData(8,'name', '19-49', 'JHONATHAN CHUA PO     '),
        creatematchData(9,'accountNumber', '49-59','0750227686'),
        creatematchData(10,'amount', '59-72', '0000000006048'),
      ];
      const matchGroup=[{
        groupName:'Line 1', matchList:matchRows1
      },
      {groupName:'Line 2', matchList:matchRows2
    },
    {groupName:'Line 3', matchList:matchRows2
    }
    
    ]
      const MatchInfo=(props)=>{
        const classes = useStyles();
        return(
          <div style={{ marginLeft: 10}}>
            <Typography variant="h5" className={classes.title} color="primary">
              Match Information
            </Typography>
           
          <List >
          {props.matchingInfo.map(info => (
                       <div key={uniqueId()}>
                               <Typography variant="subtitle1" style={{ backgroundColor:grey[100]}} color="primary">
                      Full Match: {info.fullMatch}
                            </Typography>
                                <ListItem key={uniqueId()}  alignItems="flex-start">
                                    
                                <Table className={classes.table} size="small">
                                <TableHead>
           <TableRow>
            
            <TableCell align="left">Field</TableCell>
            <TableCell align="left">Position</TableCell>
            <TableCell align="left">Value</TableCell>
            
          </TableRow>
        </TableHead>
                                  <TableBody>
                                    {info.Details.map(ml => (
                                      <TableRow key={uniqueId()}>
                                        <TableCell component="th" scope="row">
                                          {ml.fieldName}
                                        </TableCell>
                                        <TableCell >{ml.startIndex + " -> " +ml.endIndex}</TableCell>
                                        <TableCell   bgcolor="#f2f2f2" >
                                           <Typography color="primary" variant="subtitle2">
                                           {ml.value}  
                                           </Typography>
                                           
                                           
                                        </TableCell>
                                        
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                            
                          </ListItem>
                       </div>
                      
          
          
                 
                ))
                }
           
          </List>
         
          {/* <Typography variant="h6" className={classes.title}>
              Match 2
            </Typography>
          <List >
          {matchRows2.map(row => (
            <div key={row.pkid}>
                      <ListItem  key={row.pkid} alignItems="flex-start">
                  <ListItemText
                    primary={row.fieldName}
                    secondary={'Position: '+row.position +' Value: '+row.value}
                  />
                </ListItem>
                  <Divider variant="inset" component="li"  />
  
            </div>
  
                  
                ))}
          
          </List>  */}
        </div>
  
        );
      }
  
  export default MatchInfo;