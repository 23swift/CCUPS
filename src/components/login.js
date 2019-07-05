import React, { Component } from 'react'
import { Form,Field,withFormik    } from 'formik';
import {Button,Typography,Container,TextField,Paper,Grid} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
const style = {
  marginTop:30,
  
};
const useStyles = makeStyles(theme => ({
    avatar:{
        margin: 10,
        padding:0,
        color: '#fff',
        backgroundColor: theme.palette.secondary.main,
    },
    grid:{
        marginTop:'10px',
        // direction:'row',
       
    },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
        backgroundColor: theme.palette.secondary.main,
      },
      icon: {
        margin: 5,
        width: 50,
        height: 50,
        color: theme.palette.primary.light,
      },
}));

function LoginPageTemplate ({values, touched, errors,isSubmitting }) {
 const classes=useStyles();
 return  (
      <div>
                 
    <Grid container
        //   spacing={0}
        direction="column"
        alignItems="center"
        >
        
        <Avatar className={classes.bigAvatar} >
                   <Person  className={classes.icon} />
             </Avatar>
        
            
        </Grid> 
  <Container maxWidth="md" style={style}>
  
        <Form>
        
          <Typography variant="h4" component="h2" color="primary">
              Log In
        </Typography>
          <div className="form-group">
        
            <Field type="text"  component={TextField} label="UserName" fullWidth={true} className={errors.name && touched.name?"is-invalid":""}  name="name"   />
            {errors.name && touched.name && <span className="invalid-feedback">{errors.name}</span>  }
          </div>
          {/* <div className="form-group">
         
              <Field type="email" component={TextField} label="Email" fullWidth={true}   className={errors.email && touched.email?"is-invalid":""}   name="email" />
              {errors.email && touched.email && <span className="invalid-feedback">{errors.email}</span>  }
          </div> */}
          <div className="form-group">
         
              <Field type="password" component={TextField} label="Password" fullWidth={true}    className={errors.password && touched.password?"is-invalid":""}  name="password"  />
              {errors.password && touched.password && <span className="invalid-feedback">{errors.password}</span>  }
          </div>
          {/* <button type="submit" className="btn btn-primary" disabled={isValidForm(errors) && !isSubmitting ? "":"disabled"}> */}
          <Button type="submit" variant="contained" color="primary">
                  Submit
          </Button>
        
      </Form>
     
  </Container>
      </div>
  
 )};

  
//Form Configuration
export const LoginPage = withFormik({
  mapPropsToValues({ name,email,password}) {

    return{
        name:name || "",
        email:email ||"",
        password:password ||""
    }
  },
  // Custom sync validation
//   validationSchema:SignupSchema
//   ,

  handleSubmit: (values, { setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values.password, null, 2));
      setSubmitting(false);
    }, 3000);
  },

  displayName: 'BasicForm',
})(LoginPageTemplate);


export default LoginPage