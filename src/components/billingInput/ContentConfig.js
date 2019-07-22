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
import SortableList from './../common/SortableList';
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
      openDialog:false,
      dataTypeList:[]
      
    }
  }

  // 

  addConfig=(config)=>{
    let sqNum=this.state.configList.length;


    config={...config,fileSection:1,fileType:1,sequenceNum:sqNum+1}
      fetch('/api/addFileConfig',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(config)
        
    
    }).then(res=>res.json()).then(newconfig=>{
             
              this.getconfigList();
        }
    );
   
    
  }
  updateSequenceConfig=(config)=>{
    // config={...config,fileSection:1,fileType:1}

     return fetch('api/UpdateConfigSequence',{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(config)
        
    
    });
   
    
  }
  updateConfig=(config)=>{
    // config={...config,fileSection:1,fileType:1}

     return fetch('api/UpdateConfig',{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(config)
        
    
    }).then(()=>{

      this.getconfigList();
    });
   
    
  }
  
  getconfigList=()=>{
    // console.log('code to get loist here');
    this.setState({...this.state,isLoading:true});
    fetch("/api/GetAllInputFileConfig").
    then(response => response.json()).
    then((data)=>{
      setTimeout(()=>{
        this.setState({...this.state,configList:data});  
        this.setState({...this.state,isLoading:false});
       
      },1000)
      // this.setState({...this.state,configList:data});  
      // this.setState({...this.state,isLoading:false});
      // console.log(this.state.configList);
        
    });
    
  }
   getDataTypes=()=>{
    fetch("/api/getAllDataTypes").
    then(response => response.json()).then((data)=>{
      
      
      this.setState({...this.state,dataTypeList:data});
     
    });
  
  }
  onListChange=(order,oldIndex,newIndex)=>{
    let configList=this.state.configList;
    let list=[]
    let counter=1;
    
   
      order.map(orderItem=>{
         var result= this.state.configList.find((e) => e.sequenceNum == orderItem)
   
        
         result={...result,sequenceNum:counter}
         list.push(result);
         ++counter;
      });
  

   var affectedConfig=list
   
   
   this.setState({...this.state,isLoading:true});
   this.updateSequenceConfig(affectedConfig).then(()=>{
            this.setState({...this.state,configList:list}) 
            this.setState({...this.state,isLoading:false});
        }
    );
  

      
    
  }

   handleClickOpen=()=> {
    this.setState({...this.state,openDialog:true});
  }

   handleClose=()=> {
    this.setState({...this.state,openDialog:false});
  }
  

  genSequence=(data)=>{
        let list=[];
        let counter=1
        data.map(item=>{
          

        
          let result={...item,sequenceNum:counter}
          list.push(result);
          ++counter;
      });
       
       this.updateSequenceConfig(list).then(()=>{
        this.setState({...this.state,configList:list}) 
        this.setState({...this.state,isLoading:false});
    });
  }

  handleDelete=(id)=>{
    console.log('run delete',id);
   
    this.setState({...this.state,isLoading:true});
    fetch("/api/deleteFileConfig",{
      method:'DELETE',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(id)}
      ).
    then(response => response.json()).
    then((data)=>{
      setTimeout(()=>{
       this.genSequence(data);
      },1000)
      // this.setState({...this.state,configList:data});  
      // this.setState({...this.state,isLoading:false});
      // console.log(this.state.configList);
        
    });
   
    // this.setState({...this.state,configList:this.state.configList.filter((e)=>e.id!=id)});  


   
   
  }

  componentDidMount(){
     
   this.getconfigList();
   this.getDataTypes();
  }

  render() {
    return (
        <>
      
       <Toolbar style={{backgroundColor:grey[50],marginTop:4}}>
             
             <Typography  variant="h5" color="primary"  style={{flexGrow:1}}>
                                 Content Configuration
                               
                 </Typography>
                
                    <Fab size="small" aria-label="Edit" className={useStyles.fab} color="secondary"  onClick={this.handleClickOpen}>
                      <AddIcon />
                  </Fab>
                  <FormDialog open={this.state.openDialog} handleClickOpen={this.handleClickOpen} currentItem={null}
                   handleClose={this.handleClose} addFunction={this.addConfig} dataTypeList={this.state.dataTypeList}/> 
                </Toolbar> 
      
           
           
          
          {this.state.isLoading && <Box display="flex" flexDirection="row"  flexWrap="nowrap" mx={1} justifyContent="space-between" width={130}>
                                                        <Box ><CustomProgress size={20} /></Box> <Box ><Typography  color="primary">Please wait...</Typography>
                                                        </Box></Box>
                                                      } 
             <ConfigList title="Header Configuration" items={this.state.configList} onChange={this.onListChange}
              handleDelete={this.handleDelete} updateFunction={this.updateConfig} dataTypeList={this.state.dataTypeList}/>

          <ConfigTestArea/>
            {/* <MatchInfo/> */}
         
        </>
    )
  }
}
