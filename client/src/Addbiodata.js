import React from 'react';
import * as Yup from 'yup';
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function Biodata() {
    // const FormDatePicker = (props) => {
    //     return (
    //       <Field name="dob" >
    //         {({ field, meta, form: { setFieldValue } }) => {
    //           return (
    //             <DatePicker className="form-control"  autoComplete='off'
    //               {...field}
    //               selected={field.value || null}
    //               onChange={(val) => {
    //                 setFieldValue(field.name, val);
    //               }}
    //             />
    //           );
    //         }}
    //       </Field>
    //     );
    //   };
   // const [startDate, setStartDate] = useState(new Date());
    const initialValues = {
        canName: "",
        dob: "",
        sex: "",
        marStatus: "",
       // checker: "",
      };
      const validationSchema = Yup.object().shape({
        canName: Yup.string().required("You must input a Name!").trim(),
        // postText: Yup.string().required(),
        // username: Yup.string().min(3).max(15).required(),
      });
    
      const onSubmit = (data) => {
          console.log(data);
        // axios.post("http://localhost:3001/canpersonal", data).then((response) => {
        //   console.log(response);
        //  });
      };   
  return (
      <>
        <div className="container">
            <div className="col-xs-12">
                <h2 className="commonstyle">Bio-Data Form</h2>
                <h4 className="text-center">***** Fill the details one by one (All fields are mandatory) And click Next Button*****</h4>
                <form onSubmit={onSubmit}>
                    <div className='card'>
                        <div className='card success'>
                            <div className='text-white card-header bg-success'>
                            <h5>Personal Information</h5>
                            </div>
                            <div className='card-body row'>
                                <div className='col-md-6 row'>
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">Full Name </label>
                                    
                                    <div className="col-md-8">
								        <input type="text"   className="form-control" name="canName" placeholder="Enter Full Name" />
							        </div>
                                </div>
                                </div>
                                <div className='col-md-6 row'>
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">D.O.B </label>
                                    <div className="col-md-8">
								         <input type="text"  className="form-control" component={DatePicker} name="dob" placeholder="MM/DD/YYYY" />
							        </div>
                                </div>
                                </div>
                                <div className='col-md-6 row'>                                    
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">Sex </label>
                                    <div className="col-md-8 col">
                                        <input className="form-check-input" id="Male" type="radio" name="sex" value="Male" /><label className="form-check-label" htmlFor="Male">Male </label>
                                  
                                        <input  className="form-check-input" id="Female" type="radio" name="sex" value="Female" /><label className="form-check-label" htmlFor="Female">Female </label>
							        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 row'>
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">Marital status </label>
                                    <div className="col-md-8 col">
                                        <input className="form-check-input" id="Married" type="radio" name="marStatus" value="Married" /><label className="form-check-label" htmlFor="Male">Married </label>
                                  
                                        <input  className="form-check-input" id="Unmarried" type="radio" name="marStatus" value="Unmarried" /><label className="form-check-label" htmlFor="Unmarried">Unmarried </label>
							        </div>
                                </div>
                                </div>
                                <div className='col-md-6 row'>
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">Blood Group </label>
                                    <div className="col-md-8">
                                    <select name="bloodGroup" className="form-control">
                                    <option value="">Select Blood Group</option>
                                    <option value="o+ve">o+ve</option>
                                    <option value="o-ve">o-ve</option>
                                    <option value="o+ve">o+ve</option>
                                    <option value="A+ve">A+ve</option>
                                    <option value="A-ve">A-ve</option>
                                    <option value="B+ve">B+ve</option>
                                    <option value="B-ve">B-ve</option>
                                    <option value="AB+ve">AB+ve</option>	
                                    <option value="AB-ve">AB-ve</option>
                                    <option value="A1+ve">A1+ve</option>
                                    <option value="A1-ve">A1-ve</option>
                                    <option value="A2+ve">A2+ve</option>
                                    <option value="A2-ve">A2-ve</option>
                                    <option value="B1+ve">B1+ve</option>
                                    <option value="B1-ve">B1-ve</option>	
                                    <option value="A1B+ve">A1B+ve</option>
                                    <option value="A1B−ve">A1B−ve</option>	
                                    <option value="A2B+ve">A2B+ve</option>
                                    <option value="A2B−ve">A2B−ve</option>
                                    </select>
							        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 row'>
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">Mobile </label>
                                    <div className="col-md-8">
								        <input type="text" className="form-control" name="mobNum" placeholder="Enter Mobile Number" />
							        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 row'>
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">Emergency Contact </label>
                                    <div className="col-md-8">
								        <input type="text" className="form-control" name="telNum" placeholder="Enter Emergency Contact" />
							        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 row'>
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">E-mail</label>
                                    <div className="col-md-8">
								        <input type="text" className="form-control" name="email" placeholder="Enter Email" />
							        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 row'>
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">Present Address</label>
                                    <div className="col-md-8">
								        <textarea className="form-control" name="presentAddress" placeholder="Enter Present Address" ></textarea>
							        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 row'>
                                <div className="form-group row marginbottom5">
                                    <label className="col-md-4 col-form-label">Permanent Address</label>
                                    <div className="col-md-8">
								        <textarea className="form-control" name="permanentAddress" placeholder="Enter Permanant Address" ></textarea>
							        </div>
                                </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <button className="btn btn-success" type="submit">Save</button>
                    </form>
            
            </div>
        </div>
      </>
    
  )
}

export default Biodata