import React from 'react'
import { makeStyles,styled } from '@material-ui/core/styles';
import { TableCell, TableRow, Paper, Toolbar, Table, TableHead, Fab, TableBody, Typography, MenuItem, Grid, List, ListItem, ListItemText,Avatar, Divider, ListItemAvatar, Badge } from '@material-ui/core';
import { amber, green,blue } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import FormDialog from './FormDialog'
import useStyles from './useStyles';



function createData(sq,fieldName, dataType, size, format, mappToSystem) {
    return {sq, fieldName, dataType, size, format, mappToSystem };
  }
  
  const rows = [
    createData(1,'recordType', 'Numeric', 3, '',  false),
    createData(2,'cardNumber', 'Numeric', 16, '', false),
    createData(3,'name', 'Alpha Numeric', 30, '',false),
    createData(4,'accountNumber', 'Numeric', 10,'', false),
    createData(5,'amount', 'Decimal', 13, '0000000000000.00', false),
  ];

  const  ConfigList=(props)=> {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    function handleClickOpen(props) {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
    return (
      <>
       <Toolbar>
        <Typography  variant="h5" color="primary"  className={classes.title}>
                            {props.title}
            </Typography>
           
               <Fab size="small" aria-label="Edit" className={classes.fab} color="secondary"  onClick={handleClickOpen}>
                 <AddIcon />
             </Fab>
             <FormDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
           </Toolbar>
      <Grid container spacing={2}>
      <Grid item xs={12}>
      
        <div className={classes.demo}>
          <List dense={false} style={{width:"100%"}}>
           

            {props.items.map(row => (
           < div key={row.fieldName}>
           <ListItem  key={row.fieldName}>
           
                  <ListItemAvatar >
                  <Avatar className={classes.avatar}>{row.sq}</Avatar>
                  
                </ListItemAvatar>
                <Grid container spacing={1}>
              
                <Grid item>
                <Grid container direction="row"  spacing={1}>
                <Grid item>
           
                <Typography noWrap className={classes.subTitle}> {row.fieldName}</Typography>
           
                  
                   </Grid>
                      

                      <Grid container spacing={1}>
                      <Grid item>
                      <Typography  variant="caption" color="primary"  >Data Type: {row.dataType}</Typography>
                      </Grid>
                      <Grid item>
                      <Typography  variant="caption"   color="primary">Size: {row.size}</Typography>
                      </Grid>
                      <Grid item>
                      <Typography  variant="caption"   color="primary">Format: {row.format}</Typography>
                      </Grid>
                      
                     
                      
                    </Grid>
              </Grid>
          </Grid>
           
          </Grid>
          
              </ListItem>
              <Divider variant="inset" component="li" />
              </div>
         ))}
          </List>
        </div>
      </Grid>
      </Grid>
      </>
    );
  }
  
export default ConfigList;