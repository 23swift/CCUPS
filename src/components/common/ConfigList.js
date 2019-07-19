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
    
    
    return (
      <>
       
      <Grid container spacing={2}>
      <Grid item xs={12} >
      
        <div className={classes.demo}>
          <List dense={false}  style={{width:"100%"}}>
          <SortableList items={props.items} onChange={props.onChange} handleDelete={props.handleDelete} updateFunction={props.updateFunction}
           dataTypeList={props.dataTypeList} />
          </List>
        </div>
   
      </Grid>
      </Grid>
      
     
      </>
    );
  }
  


  const SortableList = ({ items, onChange,handleClickOpen,handleconfirmOpen,updateFunction,handleDelete,dataTypeList}) => {
    const classes = useStyles();
    let sortable = null; // sortable instance
    const [open, setOpen] = React.useState(false);
    const [current,setCurrent] = React.useState({});
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    
    
  const  handleSelected=(id,event)=>{
    event.preventDefault();
    let item=items.find((e)=>e.id==id);
      
       
      setCurrent(item);
      setOpen(true);
     
    }
    function handleClickOpen(props) {
      setOpen(true);
    }
    function handleClose() {
      setOpen(false);
    }
   
    function handleconfirmClose(props) {
      setConfirmOpen(false);
    }
    function handleconfirmOpen(id,event) {
      event.preventDefault();
      let item=items.find((e)=>e.id==id);
     
      setCurrent(item);
      
      setConfirmOpen(true);
    }
    const handleConfirmSubmit=()=>{

      console.log('confirm code here');
      setConfirmOpen(false);
      
    }

    const listItems = items.map(listItem => (
      
      <div id={listItem.id}  key={listItem.id} data-id={listItem.sequenceNum}>
                  <ListItem >
            <ListItemAvatar >
            <Avatar className={classes.avatar}>{listItem.sequenceNum}</Avatar>
            
          </ListItemAvatar>
          <Grid container spacing={1}>
        
            <Grid item style={{flexGrow:1}}>
            <Grid container direction="row"  spacing={1}>
            <Grid item>
            
            <Typography noWrap className={classes.subTitle}> {listItem.fieldName}</Typography>

              
              </Grid>
                  

                  <Grid container spacing={1}>
                  <Grid item>
                  <Typography  variant="caption" color="primary"  >Data Type: {listItem.dataType.desc}</Typography>
                  </Grid>
                  <Grid item>
                  <Typography  variant="caption"   color="primary">Size: {listItem.size}</Typography>
                  </Grid>
                  {/* <Grid item>
                  <Typography  variant="caption"   color="primary">Format: {item.format}</Typography>
                  </Grid> */}
                  
                
                  
                </Grid>
              
        </Grid>
        
      </Grid>
      <Grid item>
          <IconButton  size="small" onClick={(e)=>{handleSelected(listItem.id,e)}}><Edit color="primary"/></IconButton>
          <IconButton size="small" onClick={(e)=>{handleconfirmOpen(listItem.id,e)}}><Clear color="error"/></IconButton>
          
        </Grid>
      </Grid>
      
    
    </ListItem>
     <Divider variant="inset" component="li" />
      </div>
          
    
));

    return (
        <div>
            <AlertDialog open={confirmOpen} handleClose={handleconfirmClose} handleSubmit={()=>{handleDelete(current.id);handleconfirmClose();}} />
           <FormDialog open={open} currentItem={current} handleClose={handleClose}  updateFunction={updateFunction} dataTypeList={dataTypeList}/>
            <ReactSortable  
                    // tag="ul" // Defaults to "div"
                    onChange={(order, sortable, evt) => {
                       
                        //  console.log(evt);
                         
                        //  this.setState({ items: newOrder(order,this.state.items) });
                        onChange(order,evt.oldIndex+1,evt.newIndex+1);
                        
                    }}

                    options={{
                       // Element is removed from the list into another list
                        onRemove: function (/**Event*/evt) {
                          // same properties as onEnd
                          // console.log('item removed');
                          
                      }, onChoose: function (/**Event*/evt) {
                        // console.log(evt.oldIndex);  // element index within parent
                    },
                    }}
                     
                >
                     {listItems}
                </ReactSortable >
        </div>
    );
};
  
export default ConfigList;