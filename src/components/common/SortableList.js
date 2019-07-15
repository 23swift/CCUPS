import uniqueId from 'lodash/uniqueId';
import ReactDOM from 'react-dom';
import ReactSortable  from 'react-sortablejs';
import React, { Component } from 'react'

import {List, ListItem, ListItemText, Grid, Typography, ListItemAvatar, Avatar, IconButton} from '@material-ui/core'
import useStyles from './useStyles';
import { Edit } from '@material-ui/icons';


function createData(id,sequenceNum,fieldName, dataType, size, format, mappToSystem) {
    return {id,sequenceNum, fieldName, dataType, size, format, mappToSystem };
  }
  
  const rows = [
    createData(21,11,'recordType', {id:1,desc:'numeric'}, 3, '',  false),
    createData(22,12,'cardNumber', {id:2,desc:'alpha numeric'}, 16, '', false),
    createData(23,13,'name',  {id:2,desc:'alpha numeric'}, 30, '',false),
    createData(24,14,'accountNumber',  {id:2,desc:'alpha numeric'}, 10,'', false),
    createData(25,15,'amount', {id:1,desc:'numeric'}, 13, '0000000000000.00', false),
  ];

  const newOrder=(order,items)=>{
      let list=[]
      let counter=1;
      
      
        order.map(orderItem=>{
           var result= items.find((e) => e.sequenceNum == orderItem)
     
       
           result={...result,sequenceNum:counter}
           list.push(result);
           ++counter;
        });
     
      
        
        return list;
  }
class SortableList extends Component {
    constructor(props){
        super(props)
        this.items=props.items;
        console.log(props.items);
        
    }

    // state = {
    //     // items: ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']
    //     items:rows
    // };
     classes = useStyles;
    render() {
        
        
      
        
        
        // const items = this.state.items.map(item => (
            const items = this.items.map(item => (
       
        <ListItem  key={uniqueId()} data-id={item.sequenceNum}>
           
                  <ListItemAvatar >
                  <Avatar className={this.classes.avatar}>{item.sequenceNum}</Avatar>
                  
                </ListItemAvatar>
                <Grid container spacing={1}>
              
                <Grid item style={{flexGitem:1}}>
                <Grid container direction="row"  spacing={1}>
                <Grid item>
           
                <Typography noWrap className={this.classes.subTitle}> {item.fieldName}</Typography>
           
                  
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
                {/* <IconButton size="small" onClick={()=>handleClickOpen()}><Clear color="error"/></IconButton> */}
                
              </Grid>
          </Grid>
          
              </ListItem>
        
        
        )
        
        
        
        
        
        
        
        
        
        
        
        
        );

        return (
            <div>
                 <List dense={false}  style={{width:"100%"}}>
                 <ReactSortable  
                    tag="ul" // Defaults to "div"
                    onChange={(order, sortable, evt) => {
                        
                         this.setState({ items: newOrder(order,this.state.items) });
                        
                    }}
                >
                    {items}
                </ReactSortable >
                 </List>
                
            </div>
        );
    }
}
// SortableList.propTypes = {
//     items: React.PropTypes.object,
//     onChange: React.PropTypes.func
// };
export default SortableList;