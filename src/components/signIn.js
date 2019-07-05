import React, { Component } from 'react'
import { Form,Field,withFormik    } from 'formik';
import {Button,Typography,Container,TextField,Paper} from '@material-ui/core';


const style = {
  marginTop:30,
  
};

const SignInPageTemplate =({values, touched, errors,isSubmitting }) =>
  (<Container maxWidth="md" style={style}>
       
        <Form>
          
          <Typography variant="h4" component="h2" color="primary">
              Sign in
        </Typography>
          <div className="form-group">
        
            <Field type="text"  component={TextField} label="Name" fullWidth={true} className={errors.name && touched.name?"is-invalid":""}  name="name"   />
            {errors.name && touched.name && <span className="invalid-feedback">{errors.name}</span>  }
          </div>
          <div className="form-group">
         
              <Field type="email" component={TextField} label="Email" fullWidth={true}   className={errors.email && touched.email?"is-invalid":""}   name="email" />
              {errors.email && touched.email && <span className="invalid-feedback">{errors.email}</span>  }
          </div>
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
 );

  
//Form Configuration
export const SignInPage = withFormik({
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
})(SignInPageTemplate);


export default SignInPage