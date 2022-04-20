import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function test() {
  const initialValues = {
    name:'',
  }
  const onSubmit = (values) => {
    console.log('Formvalue', values);
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
  })

  return (
    <div className='container'>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <div className='row'>
        <div className='col-md-6'>
          <label className='col-md-4'>Name</label>
          <Field className="form-control" type="text" name="name" />
        </div>

        </div>
        <button >Submit</button>
      </Form>
    </Formik>
    </div>
  )
}

export default test