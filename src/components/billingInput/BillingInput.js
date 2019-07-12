import React from 'react'
import { Typography, makeStyles, Toolbar } from '@material-ui/core';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import HeaderConfig from './HeaderConfig';
import ContentConfig from './../content/ContentConfig';
import FooterConfig from './../footer/FooterConfig';

import { FeaturedPlayList, SaveAlt } from '@material-ui/icons';
import { FormatAlignLeft } from '@material-ui/icons';
import { Subtitles } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    
      appBar:{
        backgroundColor:theme.palette.background.default,
      }
  }));
function TabContainer(props) {
    return (
      <Typography component="div" >
        {props.children}
      </Typography>
    );
  }
  
//   TabContainer.propTypes = {
//     children: PropTypes.node.isRequired,
//   };
export default function BillingInput() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }
    return (
        <>
            
            
            <AppBar position="static">
              <Toolbar >
              <SaveAlt color="secondary"/>
              <Typography   variant="h6" style={{padding:"3px",margin:0,flexGrow:1}} >
                        Billing Input File Configuration
                    </Typography>
                    <Tabs variant="fullWidth"  value={value}   onChange={handleChange}  >
                         <Tab label="Header"  icon={<FeaturedPlayList/>} />
                         <Tab label="Content"   icon={<FormatAlignLeft/>} />
                        <Tab label="Footer" icon={<Subtitles/>} />
                </Tabs>

              
              </Toolbar>
                    
            </AppBar>
            
                {value === 0 && <TabContainer><HeaderConfig/></TabContainer>}
                {value === 1 && <TabContainer><ContentConfig/></TabContainer>}
                {value === 2 && <TabContainer><FooterConfig/></TabContainer>}
        </>
            
    )
}
