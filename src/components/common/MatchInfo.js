import React from 'react'
import useStyles from './useStyles';
import uniqueId from 'lodash/uniqueId';

import { Typography, List, ListItem, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import { green, grey, orange, blue } from '@material-ui/core/colors';

    
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
                               <Typography variant="subtitle1" style={{ backgroundColor:orange[400], color:grey[50]}} >
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
         
       
        </div>
  
        );
      }
  
  export default MatchInfo;