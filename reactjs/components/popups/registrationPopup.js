import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useRouter } from 'next/router'
import { Modal, Form } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import toastMessage from '../../utils/toastMessage';
import { regex } from '../../utils/regex';
import { useState } from 'react';
import { handleAlphaNumericInput, handleNumericInput } from '../../utils/commonFunctions';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  firstName: yup.string().min(1, 'Please enter at least 1 characters').max(25, 'Please enter max 25 characters').required('First name is required'),
  lastName: yup.string().min(1, 'Please enter at least 1 characters').max(25, 'Please enter max 25 characters').required('Last name is required'),
  email: yup.string().min(1, 'Please enter at least 1 characters').max(25, 'Please enter max 25 characters').email('Enter valid email').required('Email is required'),
  mobileNumber: yup.string().min(10, 'Please enter at least 10 characters').max(10, 'Please enter max 10 characters').required('Mobile number is required'),
  city: yup.string().required('City is required'),
  password: yup.string().min(8, 'Please enter at least 8 characters and max 25').max(25, 'Please enter at least 8 characters and max 25').required('Password is required').matches(regex.password, 'Password must contain atleast 1 alphabet, 1 number and 1 special character.'),
});

const RegistrationPopup = ({ ...props }) => {
  const { show, handleClose, handleLoginOpen, isRegistered, registerCustomer } = props;
  const router = useRouter();
  const [acceptTearmsAndCondition, setAcceptTearmsAndCondition] = useState(false);
  const handleAcceptTearmsAndCondition = () => {
    setAcceptTearmsAndCondition(!acceptTearmsAndCondition);
  }

  useEffect(() => {
    if(isRegistered && show){
      setAcceptTearmsAndCondition(false);
      toastMessage('success-xl', 'Register successfuly, Please verify your email!');
      handleClose();
    }
  }, [isRegistered])

  const handleRegisterFormSubmit = async (values, actions) => {
    if (!acceptTearmsAndCondition) {
      toastMessage('error-large', 'Please select checkbox to proceed');
    }
    if (values && acceptTearmsAndCondition) {
      let finalData = values;
      const storeCustomer = await registerCustomer(finalData);
    }
  }

  const handleTearmsAndConditionLink = () => {
    setAcceptTearmsAndCondition(false);
    router.push('/terms-condition');
  }

  const responseGoogle = (response) => {
    //console.log(response);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Create an Account</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
          <img src="/images/close-ic.svg" alt="Close" />
        </button>
      </div>
      <div className="modal-body">
        <Formik
          validationSchema={schema}
          onSubmit={(values, actions) => { handleRegisterFormSubmit(values, actions) }}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            city: '',
            password: ''
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit} className="loginform">
              <div className="form-group">
                <img src="/images/usericon.svg" alt="usericon" />
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  className="no-active-form-input"
                  autoComplete="off"
                  onKeyPress={(event) => handleAlphaNumericInput(event)}
                />
                {errors.firstName && touched.firstName &&
                  <div className="error-msg">
                    {errors.firstName}
                  </div>
                }
              </div>
              <div className="form-group">
                <img src="/images/usericon.svg" alt="usericon" />
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  className="no-active-form-input"
                  autoComplete="off"
                  onKeyPress={(event) => handleAlphaNumericInput(event)}
                />
                {errors.lastName && touched.lastName &&
                  <div className="error-msg">
                    {errors.lastName}
                  </div>
                }
              </div>
              <div className="form-group">
                <img src="/images/emailicon.svg" alt="emailicon" />
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  className="no-active-form-input"
                  autoComplete="off"
                />
                {errors.email && touched.email &&
                  <div className="error-msg">
                    {errors.email}
                  </div>
                }
              </div>
              <div className="form-group">
                <img src="/images/phone-ic.png" alt="emailicon" style={{ top: "10px" }} />
                <Form.Control
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={values.mobileNumber}
                  onChange={handleChange}
                  isValid={touched.mobileNumber && !errors.mobileNumber}
                  className="no-active-form-input"
                  autoComplete="off"
                  onKeyPress={(event) => handleNumericInput(event)}
                />
                {errors.mobileNumber && touched.mobileNumber &&
                  <div className="error-msg">
                    {errors.mobileNumber}
                  </div>
                }
              </div>
              <div className="form-group">
                <img src="/images/buldig-ic.png" alt="emailicon" style={{ top: "11px" }} />
                <Form.Control
                  as="select"
                  name="city"
                  placeholder="City"
                  value={values.city}
                  onChange={handleChange}
                  isValid={touched.city && !errors.city}
                  className="no-active-form-input-select"
                >
                  <option value="" disabled={true}>City</option>
                  <option value="1">Udaipur</option>
                  <option value="2">Goa</option>
                  <option value="3">Manali</option>
                  <option value="4">Ooty</option>
                  <option value="5">Delhi</option>
                </Form.Control>
                {errors.city && touched.city &&
                  <div className="error-msg">
                    {errors.city}
                  </div>
                }
              </div>
              <div className="form-group">
                <img src="/images/pwd.svg" alt="passwordicon" />
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  className="no-active-form-input"
                  autoComplete="off"
                />
                {errors.password && touched.password &&
                  <div className="error-msg">
                    {errors.password}
                  </div>
                }
              </div>
              <div className="accept_block">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" value={acceptTearmsAndCondition} onChange={() => handleAcceptTearmsAndCondition()} />
                  <label className="custom-control-label" htmlFor="customCheck">I agree to <span className="custom-link" onClick={() => handleTearmsAndConditionLink()}>Terms & Conditions, Privacy Policy</span> and to subscribe to emails for offers, alerts and services.</label>
                </div>
              </div>
              <div className="submit_block">
                <button className="button1" type="submit">
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <span className="or">OR Register with</span>
        <ul className="social_block">
          <li>
            <a href="#">
              <img src="/images/fbicon.svg" alt="fbicon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/appleicon.svg" alt="appleicon" />
            </a>
          </li>
          <li>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              render={renderProps => (
                <button className="social-login-button" onClick={renderProps.onClick} disabled={renderProps.disabled}><img src="/images/gplus.svg" alt="gplusicon" /></button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </li>
        </ul>
        <div className="signup_block">
          Already have an account? <span className="custom-link" onClick={() => handleLoginOpen()}>Sign In.</span>
        </div>
      </div>
    </Modal >
  )
}

export default RegistrationPopup;