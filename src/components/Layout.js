import React from 'react';
import Nav from './Nav'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter,Route } from 'react-router-dom'
import HeaderConfig from './header/HeaderConfig'
import home from './home'
import ContentConfig from './content/ContentConfig'
import signIn from './signIn'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PageHeader from './PageHeader';
import FooterConfig from './footer/FooterConfig'
import { Form } from 'formik';
import bdoLogo from '../img/bdoLogo2.png'
import manilaWater from '../img/logo-mwc-colored-428px.png'
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, CssBaseline, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import BillingInput from './billingInput/BillingInput';
import { Input, ExitToApp, Clear, HowToReg, NoteAdd, SaveAlt, RestorePage, InsertChartOutlined, AccountBalance, WorkOutline, ArrowBackIos } from '@material-ui/icons';

import {Link as RouterLink,NavLink  } from "react-router-dom";
import Institution from './Institution/Institution';
import { blue, pink, red,orange } from '@material-ui/core/colors';
import Product from './product/Product';

const drawerWidth = 225;
const useStyles = makeStyles(theme => ({
   root: {
     display: 'flex',
   },
   appBar: {
     width: `calc(100% - ${drawerWidth}px)`,
     marginLeft: drawerWidth,
   },
   drawer: {
     width: drawerWidth,
     flexShrink: 0,
    //  backgroundColor:theme.palette.primary.main
   },
   drawerPaper: {
     width: drawerWidth,
     backgroundColor: theme.palette.background.default,
   },
   toolbar: theme.mixins.toolbar,
   content: {
     flexGrow: 1,
    //  backgroundColor: theme.palette.background.default,
     padding: theme.spacing(0),
   },
   menuListBack:{
    // backgroundColor: theme.palette.background.default,
    color:theme.palette.primary.light,
   
   },
   navIcon:{
     color:orange[400]
   },
   menuListItem:{
    '&:hover': {
      // background: "#f00",
      color:blue[800]
    },
    color:theme.palette.primary.dark
   }
 }));
 
const Layout=()=>{
   var divStyle = {
      marginTop:'300px'
   }
   const classes = useStyles();
    return (
     <>
       <BrowserRouter >
      <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
         {/* <PageHeader/> */}
         <img   src={bdoLogo} alt="" width="126" height="50" style={{marginLeft:"3px"}}/>
     
         <Typography color="primary"  variant="subtitle1" style={{padding:"5px",margin:0,color:blue[700]}}>
                        MANILA WATER COMPANY INC.
                    </Typography>
        {/* <div className={classes.toolbar} /> */}
        <Divider />
        <List className={classes.menuList}>
        <ListItem button component={RouterLink} to="/institution" className={classes.menuListItem} >
              <ListItemIcon><AccountBalance className={classes.navIcon}/></ListItemIcon>
              <ListItemText primary="Institution"/>
         </ListItem>
         <ListItem button component={RouterLink} to="/product"  className={classes.menuListItem} >
              <ListItemIcon><WorkOutline  className={classes.navIcon}/></ListItemIcon>
              <ListItemText primary="Product"/>
         </ListItem>
        <ListItem button disabled className={classes.menuListItem}  >
              <ListItemIcon><NoteAdd  className={classes.navIcon}/></ListItemIcon>
              <ListItemText primary="Enrollment"/>
         </ListItem>
         <ListItem button className={classes.menuListItem}  >
              <ListItemIcon><Clear  className={classes.navIcon}/></ListItemIcon>
              <ListItemText primary="Disenrollment"/>
         </ListItem>
         <ListItem button  button  component={RouterLink} to="/billing-input"  className={classes.menuListItem} >
              <ListItemIcon><SaveAlt  className={classes.navIcon}/></ListItemIcon>
              <ListItemText primary='Input Billing'/>
         </ListItem>
         <ListItem button  className={classes.menuListItem} >
              <ListItemIcon ><RestorePage  className={classes.navIcon}/></ListItemIcon>
              <ListItemText primary='Billing Return'/>
         </ListItem>
         
         <Divider />
         <ListItem button  className={classes.menuListItem} >
              <ListItemIcon><InsertChartOutlined className={classes.navIcon}/></ListItemIcon>
              <ListItemText primary='Billing Report'   />
            </ListItem>
        </List>
        <Divider />
        <List >
         
           
            <ListItem button className={classes.menuListBack} variant="outlined">
              <ListItemIcon style={{color:orange[500]}}><ArrowBackIos /></ListItemIcon>
              <ListItemText primary='Back to List of Institutions' style={{color:blue[700]}} />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        
        <Route exact path="/" component={BillingInput} />
              
              {/* <Route exact path="/header-config" component={HeaderConfig} /> */}

            {/* <Route exact path="/content-config" component={ContentConfig} />
           <Route exact path="/footer-config" component={FooterConfig} /> */}
           <Route exact path="/billing-input" component={BillingInput} />
           <Route exact path="/institution" component={Institution} />
           <Route exact path="/product" component={Product} />
           
           
        
      </main>
    </div>
    </BrowserRouter>
     </> 
     
     
      
      
    );
};

export default Layout;
