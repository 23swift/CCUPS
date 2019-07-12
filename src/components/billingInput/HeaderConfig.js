import React, { Component } from 'react'
import { Typography, Toolbar, Fab, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';

import ConfigList from './../common/ConfigList';
import ConfigTestArea from './../common/ConfigTestArea';
import AppBar from '@material-ui/core/AppBar';
import  AddIcon from '@material-ui/icons/Add';
import useStyles from './../common/useStyles';
import MatchInfo from './../common/MatchInfo';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { styled } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';
import FormDialog from '../common/FormDialog';
import { blue, grey } from '@material-ui/core/colors';
const CustomProgress=styled(CircularProgress)({

 
  marginLeft: "3px",
  color: "orange",
 


});

export default class  HeaderConfig extends Component {
  constructor(props){
    super(props);
  
    this.state={
      configList:[],
      isLoading:false,
      openDialog:false
      
    }
  }

  // 

  addConfig=(config)=>{
    config={...config,fileSection:1,fileType:1}
      fetch('/api/addFileConfig',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(config)
        
    
    }).then(res=>res.json()).then(newconfig=>{
              console.log(this);
              console.log('Add function for Billing Input header:'+ JSON.stringify(config));
              this.getconfigList();
        }
    );
   
    
  }

  getconfigList=()=>{
    // console.log('code to get loist here');
    this.setState({...this.state,isLoading:true});
    fetch("/api/GetAllInputFileConfig").then(response => response.json()).
    then((data)=>{
      setTimeout(()=>{
        this.setState({...this.state,configList:data});  
        this.setState({...this.state,isLoading:false});
      },2000)
        
    });
    
  }
   handleClickOpen=()=> {
    this.setState({...this.state,openDialog:true});
  }

   handleClose=()=> {
    this.setState({...this.state,openDialog:false});
  }
 
  componentDidMount(){
     
   this.getconfigList();
  }

  render() {
    return (
        <>
      
       <Toolbar style={{backgroundColor:grey[50],marginTop:4}}>
             
             <Typography  variant="h5" color="primary"  style={{flexGrow:1}}>
                                 Header Configuration
                               
                 </Typography>
                
                    <Fab size="small" aria-label="Edit" className={useStyles.fab} color="secondary"  onClick={this.handleClickOpen}>
                      <AddIcon />
                  </Fab>
                  <FormDialog open={this.state.openDialog} handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} addFunction={this.addConfig} /> 
                </Toolbar> 
      
           
           
          {/* <hr/> */}
          {this.state.isLoading && <Box display="flex" flexDirection="row"  flexWrap="nowrap" mx={1} justifyContent="space-between" width={130}>
                                                        <Box ><CustomProgress size={20} /></Box> <Box ><Typography  color="primary">Please wait...</Typography>
                                                        </Box></Box>
                                                      } 
             <ConfigList title="Header Configuration" items={this.state.configList}/> 
             {/* <ConfigTestArea/>
            <MatchInfo/> */}
         
        </>
    )
  }
}
