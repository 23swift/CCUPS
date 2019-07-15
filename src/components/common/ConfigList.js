import React from 'react'
import ReactDOM from 'react-dom';

import { makeStyles,styled } from '@material-ui/core/styles';
import { TableCell, TableRow, Paper, Toolbar, Table, TableHead, Fab, TableBody, Typography, MenuItem, Grid, List, ListItem, ListItemText,Avatar, Divider, ListItemAvatar, Badge, Button, IconButton } from '@material-ui/core';
import { amber, green, blue, grey } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import FormDialog from './FormDialog'
import useStyles from './useStyles';
import { Edit, HighlightOff, Clear } from '@material-ui/icons';
import AlertDialog from './AlertDialog';
import uniqueId from 'lodash/uniqueId';

import ReactSortable  from 'react-sortablejs';


// function createData(sq,fieldName, dataType, size, format, mappToSystem) {
//     return {sq, fieldName, dataType, size, format, mappToSystem };
//   }
  
//   const rows = [
//     createData(1,'recordType', 'Numeric', 3, '',  false),
//     createData(2,'cardNumber', 'Numeric', 16, '', false),
//     createData(3,'name', 'Alpha Numeric', 30, '',false),
//     createData(4,'accountNumber', 'Numeric', 10,'', false),
//     createData(5,'amount', 'Decimal', 13, '0000000000000.00', false),
//   ];

  const  ConfigList=(props)=> {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    

   
    function handleClickOpen(props) {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
    function handleAdd(){

    }


   


    return (
      <>
       
      <Grid container spacing={2}>
      <Grid item xs={12} >
      
        <div className={classes.demo}>
          <List dense={false}  style={{width:"100%"}}>
          <SortableList items={props.items} onChange={props.onChange} handleClickOpen={handleClickOpen}/>
          </List>
        </div>
   
      </Grid>
      </Grid>
      
      <AlertDialog open={open} handleClose={handleClose} />
      </>
    );
  }
  


  const SortableList = ({ items, onChange,handleClickOpen }) => {
    const classes = useStyles();
    let sortable = null; // sortable instance
    
    const listItems = items.map(item => (
            <ListItem id={item.id}  key={item.id} data-id={item.sequenceNum}>
                
            <ListItemAvatar >
            <Avatar className={classes.avatar}>{item.sequenceNum}</Avatar>
            
          </ListItemAvatar>
          <Grid container spacing={1}>
        
          <Grid item style={{flexGrow:1}}>
          <Grid container direction="row"  spacing={1}>
          <Grid item>

          <Typography noWrap className={classes.subTitle}> {item.fieldName}</Typography>

            
            </Grid>
                

                <Grid container spacing={1}>
                <Grid item>
                <Typography  variant="caption" color="primary"  >Data Type: {item.dataType.desc}</Typography>
                </Grid>
                <Grid item>
                <Typography  variant="caption"   color="primary">Size: {item.size}</Typography>
                </Grid>
                {/* <Grid item>
                <Typography  variant="caption"   color="primary">Format: {item.format}</Typography>
                </Grid> */}
                
              
                
              </Grid>
              
        </Grid>

      </Grid>
      <Grid item>
          <IconButton  size="small"><Edit color="primary"/></IconButton>
          <IconButton size="small" onClick={handleClickOpen}><Clear color="error"/></IconButton>
          
        </Grid>
      </Grid>

        </ListItem>
));

    return (
        <div>
           
           
            <ReactSortable  
                    // tag="ul" // Defaults to "div"
                    onChange={(order, sortable, evt) => {
                        // console.log(evt);
                        // console.log(sortable);
                         
                        //  this.setState({ items: newOrder(order,this.state.items) });
                        onChange(order,evt.oldIndex+1,evt.newIndex+1);
                        
                    }}
                >
                     {listItems}
                </ReactSortable >
        </div>
    );
};
  
export default ConfigList;