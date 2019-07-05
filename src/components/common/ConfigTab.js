import React from 'react'
import { AppBar } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';

export default function ConfigTab() {
    return (
        <div>
             <AppBar position="static"  className={classes.appBar}>
      
                <Tabs value={value} onChange={handleChange}>
                
                    <Tab label="Header"  icon={<FeaturedPlayList/>} to="/header-config" component={RouterLink}/>
                    <Tab label="Content"   icon={<FormatAlignLeft/>} to="content-config" component={RouterLink}/>
                    <Tab label="Footer" icon={<Subtitles/>} to="/footer-config" component={RouterLink}/>
                </Tabs>
                </AppBar>
                
        </div>
    )
}
