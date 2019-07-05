import React from 'react'
import { ProductForm } from './ProductForm';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { AccountBalance, WorkOutline } from '@material-ui/icons';

export default function Product() {
    return (
        <div>
             <AppBar position="static">
            <Toolbar color="white">
            <WorkOutline color="secondary"/>
            <Typography variant="h6" color="sescodary" style={{flexGrow:1}}>
           
                         Product
            </Typography>
            
            
            </Toolbar>
           
        </AppBar>
            <ProductForm/>
        </div>
    )
}
