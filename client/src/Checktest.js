import React, { useState } from 'react';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Texterror from './Texterror';

function Checktest() {
  const [formValue, setFormvalues] = useState(null);
  const initialValues = {
    name:'',
    email:'',
    address:'',
  }
  
  const savedValues = {
    name:'Raj',
    email:'raj@gmail.com',
    address:'10 Birla Avenue',
  }

  const onSubmit = (values, onsubprops) => {
    console.log('Formvalue', values);
    console.log('Submit props', onsubprops);
    onsubprops.setSubmitting(false);
    onsubprops.resetForm();
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required').trim(),
    email: Yup.string().email("Not an Valid email").required("Required"),
    address: Yup.string().required("Required"),

  })

  return (
    <div className='container'>
    <Formik initialValues={formValue || initialValues} 
    onSubmit={onSubmit} 
    validationSchema={validationSchema}
    enableReinitialize
    >
    {
        formik => {
            console.log('Formik props', formik);
            return(
                <Form>
                        <div className='paddingtop10 row'>
                        <div className='col-md-6 row'>
                        <div className="form-group row marginbottom5">
                        <label className='col-md-4'>Name</label>
                        <div className="col-md-8">
                        <Field className="form-control" autoComplete="off" type="text" name="name" /><ErrorMessage component={Texterror} name="name"/>
                        </div>
                        </div>
                        </div>
                        <div className='col-md-6 row'>
                        <div className="form-group row marginbottom5">
                        <label className='col-md-4'>Email</label>
                        <div className="col-md-8">
                        <Field className="form-control" autoComplete="off" type="text" name="email" /><ErrorMessage component={Texterror} name="email"/>
                        </div>
                        </div>
                        </div>
                        <div className='col-md-6 row'>
                        <div className="form-group row marginbottom5">
                        <label className='col-md-4'>Address</label>
                        <div className="col-md-8">
                        <Field  as="textarea" className="form-control" autoComplete="off" type="text" name="address" /><ErrorMessage component={Texterror} name="address"/>
                        </div>
                        </div>
                        </div>

                        </div>
                        {/* <button className='btn btn-success' type="Submit" disabled={!(formik.isValid && formik.dirty)} >Submit</button> */}
                        <button className="btn btn-info" type="reset">Reset</button>
                        <button className="btn btn-warning" type="button" onClick={() => setFormvalues(savedValues)}>Load Saved Data</button>
                        <button className='btn btn-success' type="Submit" disabled={formik.isSubmitting} >Submit</button>
                </Form>
            )
        }
    }
     
    </Formik>
    </div>
  )
}

export default Checktest