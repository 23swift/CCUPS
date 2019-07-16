import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Cancel, Warning } from '@material-ui/icons';
import { red, orange } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
export default function AlertDialog(props) {
    // const [open, setOpen] = React.useState(false);
  
    // function handleClickOpen() {
    //   setOpen(true);
    // }
  
    // function handleClose() {
    //   setOpen(false);
    // }
  
    return (
      <div>
        
        <Dialog
          open={props.open}
        //   onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"  style={{ color:red[500]}}  >

              
              <Warning style={{marginRight:3,color:red[500]}}/>
              
              
              Oops wait!!!
              </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this item ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button  variant="outlined" onClick={props.handleSubmit}  color="primary">
              Yes Please
            </Button>
            <Button variant="outlined" onClick={props.handleClose}  autoFocus>
               
                Cancel
               
              
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }