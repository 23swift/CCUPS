import React from "react";
import {Link as RouterLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FeaturedPlayList from '@material-ui/icons/FeaturedPlayList';
import Subtitles from '@material-ui/icons/Subtitles';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
import { amber, green,blue } from '@material-ui/core/colors';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Toolbar, Fab, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, CssBaseline } from '@material-ui/core';
import useStyles from './common/useStyles';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   }
// }));

function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
    
      <AppBar position="static">
      
      <Tabs value={value} onChange={handleChange}>
      
        <Tab label="Header"  icon={<FeaturedPlayList/>} to="/header-config" component={RouterLink}/>
        <Tab label="Content"   icon={<FormatAlignLeft/>} to="content-config" component={RouterLink}/>
        <Tab label="Footer" icon={<Subtitles/>} to="/footer-config" component={RouterLink}/>
      </Tabs>
    </AppBar>
     
     
      {/* {value === 0 && <TabContainer><HeaderConfig/></TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>} */}
     
    </>
  );
}

export default Nav;