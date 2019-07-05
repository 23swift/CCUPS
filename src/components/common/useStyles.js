import { makeStyles,styled } from '@material-ui/core/styles';
import { amber, green,blue } from '@material-ui/core/colors';
const drawerWidth = 240;
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
      // color:blue[500]
      color:theme.palette.primary.main
    },
    subTitle: {
      flexGrow: 1,
      //  color:amber[700]
      color:blue[500]
    },
    matchList:{
      maxHeight: '300px',
    },
    margin: {
      margin: theme.spacing(1),
    },
    
  table: {
    minWidth: 300,
  },
  
  paper: {
    maxWidth: "100%",
    width:"100%",
    // margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
    // fab: {
    //   margin: theme.spacing(1),
    // }
    
  }));

  export default useStyles;