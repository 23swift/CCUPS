import React, { Component } from 'react'
import homePageImg from '../img/Calomiris_WhyBanking_2_650.jpg'
import { TextField as formikField,Select as formikSelect } from 'formik-material-ui';
import TextField from '@material-ui/core/TextField';
import LoginPage from './login'
import { Form,Field,withFormik } from 'formik';
import { makeStyles,styled } from '@material-ui/core/styles';
import {Card,CardContent,Typography,CardActions,Button,Paper,Grid,Box,Select,FormControl,MenuItem,InputLabel
,FormGroup,FormControlLabel,Checkbox,TableCell,Table,TableHead,TableRow,TableBody,List,ListItem,ListItemText,Toolbar,Fab,Divider,IconButton,SnackbarContent } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import MaterialTable from 'material-table';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import * as Yup from 'yup';
import { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { amber, green,blue } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import Icon from '@material-ui/core/Icon';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
export default class home extends Component {
    render() {
        return (
            <div className="Container">
            {/* <Typography variant="h3" color="primary">
                    Welcome
            </Typography> */}
               
                {/* <img src={homePageImg} alt=""/> */}
                {/* <LoginPage/> */}
                <BillingInputFile/>
            </div>
        )
    }
}

const CustomProgress=styled(CircularProgress)({

 
    margin: "5px",
    color: "#ff9800",
   
  
  
  });
const isEmpty=(obj)=> {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
  
const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(1, 1),
      margin: theme.spacing(1, 1),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      // width: 200,
      
    },
    submitButton:{
      marginTop:'10px'
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: "100%",
      },
      
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      height:'500px'
      // width: 200,
    },
    title: {
      flexGrow: 1,
      color:blue[500]
    },
    subTitle: {
      flexGrow: 1,
      color:amber[700]
    },
    matchList:{
      maxHeight: '300px',
    },
    margin: {
      margin: theme.spacing(1),
    },
    // fab: {
    //   margin: theme.spacing(1),
    // }
    
  }));

  function generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
const BillingInputFile=()=>{
  const classes = useStyles();
    return(
        <div style={{marginTop:'5px'}} >
            <Typography variant="h4" color="primary">Billing Input File</Typography>    
            {/* <BillingInputForm/> */}
            {/* <MaterialTableDemo/> */}
            <Grid container  direction="column" spacing={1}>
               
                <FileConfigTable />
                
                <TestArea/>
               
          
                <MatchInformation/>
          
            </Grid>
          
            
        </div>
        
    );
}


const BillingFormTemplate =props =>{
    const {
      values,
      touched,
      errors,
      isSubmitting
      
      
    } = props;
    // console.log(props);
    
    
  const classes = useStyles();
  return (
    // <Paper className={classes.root}>
    <div>
       {/* <Typography color="primary" variant="h5">
                        Add Post
                </Typography> */}
              <Form >
                        {/* <Field  component={formikField} label="Starts at Line"   fullWidth name="startingLine"   /> */}
                        
                        <Field  component={formikField} label="Field Name"   fullWidth name="fieldname"   />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="type-simple">Type</InputLabel>
                           
                            <Field component={formikSelect} name="type" id="type-simple">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Numeric</MenuItem>
                            <MenuItem value={20}>Alpha Numeric</MenuItem>
                            <MenuItem value={30}>DateTime</MenuItem>
                            <MenuItem value={40}>Decimal</MenuItem>
                            {/* <MenuItem value={50}></MenuItem>
                            <MenuItem value={60}>Transaction Date</MenuItem> */}
                          </Field>
                        </FormControl>
                        <Field component={formikField} label="Size"   fullWidth multiline rows="2" rowsMax="2"  name="size" />
                        <Field component={formikField} label="Format"   fullWidth multiline rows="2" rowsMax="2"  name="format" />
                      
                        <FormControlLabel
                            control={
                            <Checkbox checked={false}  value="checkedA" />
                            }
                            label="Mapp to System Field"
                        />

                        <FormControl className={classes.formControl}>
                            {/* <InputLabel htmlFor="age-simple">System Field</InputLabel> */}
                            <Field component={formikSelect} name="systemField">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Record Type</MenuItem>
                            <MenuItem value={20}>Name</MenuItem>
                            <MenuItem value={30}>Card Number</MenuItem>
                            <MenuItem value={40}>Amount</MenuItem>
                            <MenuItem value={50}>Card Number</MenuItem>
                            <MenuItem value={60}>Transaction Date</MenuItem>
                            </Field>
                        </FormControl>      


                        {/* <Grid container spacing={2}>
                            <Grid item>
                            <Button type="submit" variant="contained" color="primary" className={classes.submitButton} disabled={!isEmpty(errors) || isSubmitting} >
                              {isSubmitting? <Box display="flex" flexDirection="row"  flexWrap="nowrap">
                                <Box ><CustomProgress size={20} /></Box> <Box ><Typography  color="primary">Please wait...</Typography></Box></Box>:"Submit"
                              }
                            </Button>
                            </Grid>
                           
                            
                          </Grid> */}
                    
               
      
      </Form>

     </div>
  
  );
  }



  //Validation Schema
const SignupSchema=Yup.object().shape({
title:Yup.string()
.min(2,"Minimum of two Characters")
.max(20,"Maximum of 20 Characters")
.required('Title is Required'),
body:Yup.string()
.min(2,"Minimum of two Characters")
.max(500,"Maximum of 500 Characters")
.required('Body is Required'),



});

  //Form Configuration
export const BillingInputForm = withFormik({

    mapPropsToValues: () => ({filedName:'',type:'',size:'',format:'',systemField:''})
    ,
    
    
    // Custom sync validation
    validationSchema:SignupSchema
    ,
    
    handleSubmit: (values,{props,resetForm,setSubmitting}) => {
      setSubmitting(true);
      
      console.log(props);
     
      setTimeout(() => {
        resetForm();
       
        setSubmitting(false);
      }, 2000);
       
    },
    
    displayName: 'BasicForm',
    })(BillingFormTemplate);
    


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

    const  FileConfigTable=()=> {
      const classes = useStyles();
      const [open, setOpen] = React.useState(false);
    
      function handleClickOpen() {
        setOpen(true);
      }
    
      function handleClose() {
        setOpen(false);
      }
      return (
        <Paper className={classes.root}>
         
            <Toolbar>
            <Typography variant="h5" color='primary' className={classes.title} >
                File Layout Configuration
              </Typography>
             
                <Fab color="secondary" size="small" aria-label="Edit" className={classes.fab}  onClick={handleClickOpen}>
                  <AddIcon />
              </Fab>
            </Toolbar>
         
          <Table size="small" className={classes.table}>
            <TableHead>
              <TableRow>
              <TableCell  className={classes.subTitle}>Sequence</TableCell>
                <TableCell  className={classes.subTitle}>Field&nbsp;Name</TableCell>
                <TableCell className={classes.subTitle}>Data&nbsp;Type</TableCell>
                <TableCell className={classes.subTitle}>Size</TableCell>
                <TableCell className={classes.subTitle}>Format</TableCell>
                <TableCell className={classes.subTitle}>Mapp&nbsp;to&nbsp;System</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.fieldName}>
                   <TableCell >{row.sq}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.fieldName}
                  </TableCell>
                  <TableCell >{row.dataType}</TableCell>
                  <TableCell >{row.size}</TableCell>
                  <TableCell >{row.format}</TableCell>
                  <TableCell >{row.mappToSystem}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <FormDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
        </Paper>
      );
    }
    





    const TestArea=()=>{
      const classes = useStyles();
        return(
          <Paper className={classes.root}>
                     <form  noValidate autoComplete="off">
              <TextField
                  id="filled-multiline-static"
                  label="Test Area"
                  fullWidth
                  multiline
                  rows="10"
                  variant="outlined"
                  // defaultValue="Default Value"
                  // className={classes.textField}
                  margin="normal"
                  // variant="filled"
                />  
          </form>
          
          </Paper>
         
        );

    }


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
    const MatchInformation=()=>{
      const classes = useStyles();
      return(
        <div style={{ height: '50% '}}>
          <Typography variant="h5" className={classes.title} color="primary">
            Match Information
          </Typography>
         
        <List >
        {matchGroup.map(row => (
                     <div key={row.groupName}>
                             <Typography variant="subtitle1" color="primary" className={classes.subTitle}>
                     {row.groupName}
                          </Typography>
                              <ListItem  key={row.groupName} alignItems="flex-start">
                                  
                              <Table className={classes.table} size="small">
                                <TableBody>
                                  {row.matchList.map(ml => (
                                    <TableRow key={ml.pkid}>
                                      <TableCell component="th" scope="row">
                                        {ml.fieldName}
                                      </TableCell>
                                      <TableCell >{ml.position}</TableCell>
                                      <TableCell   bgcolor="#f2f2f2">
                                         
                                         {ml.value}
                                         
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




    ////////////////Dialog
    const   FormDialog =(props)=> {
      // const [open, setOpen] = React.useState(false);
    
      // function handleClickOpen() {
      //   setOpen(true);
      // }
    
      // function handleClose() {
      //   setOpen(false);
      // }
      const classes = useStyles();
      return (
        <div>
         
          <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" color="primary">
              
            <Typography variant="inherit" color='primary' className={classes.title} >
                File Layout Configuration
              </Typography>
              
              </DialogTitle>
              <MySnackbarContentWrapper
                variant="info"
                className={classes.margin}
                message="Layout configuration for Billing InputFile etc.additonal Information here..."
              />
            <DialogContent>
          
             
              <BillingInputForm/>
            </DialogContent>
            <DialogActions>
              <Button onClick={props.handleClose} color="primary" variant="contained">
                Save
              </Button>
              <Button onClick={props.handleClose} color="secondary"  variant="contained">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }

/////////////////////Sanck bar
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};
const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: blue[400],
  },
  warning: {
    backgroundColor: amber[600],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity:'0.9',
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));
    function MySnackbarContentWrapper(props) {
      const classes = useStyles1();
      const { className, message, onClose, variant, ...other } = props;
      const Icon = variantIcon[variant];
    
      return (
        <SnackbarContent
          className={clsx(classes[variant], className)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <Icon className={clsx(classes.icon, classes.iconVariant)} />
              {message}
            </span>
          }
          // action={[
          //   <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          //     <CloseIcon className={classes.icon} />
          //   </IconButton>,
          // ]}
          // {...other}
        />
      );
    }
    
    MySnackbarContentWrapper.propTypes = {
      className: PropTypes.string,
      message: PropTypes.node,
      onClose: PropTypes.func,
      variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    };
    
    const useStyles2 = makeStyles(theme => ({
      margin: {
        margin: theme.spacing(1),
      },
    }));
    