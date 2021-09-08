import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
//import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useRouter } from 'next/router'
import { Modal, Form } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import toastMessage from '../../utils/toastMessage';

const schema = yup.object().shape({
  email: yup.string().min(1, 'Please enter at least 1 characters').max(25, 'Please enter max 25 characters').email('Enter valid email').required('Email is required'),
  password: yup.string().min(8, 'Please enter at least 8 characters and max 25').max(25, 'Please enter at least 8 characters and max 25').required('Password is required'),
});

const LoginPopup = ({ ...props }) => {
  console.log("props", props);
  const { show, handleClose, handleForgotPasswordOpen, handleRegisterOpen, isLogin, customerLogin } = props;
  const router = useRouter();

  useEffect(() => {
    if(isLogin && show){
      toastMessage('success', 'Welcome to Luxury Trips!');
      router.push('/my-account');
      handleClose();
    }
  }, [isLogin])


  const handleLoginFormSubmit = async (values, actions) => {
    if (values) {
      let finalData = values;
      const login = await customerLogin(finalData);
    }
  }

  const responseGoogle = (response) => {
    //console.log(response);
  }

  const responseFacebook = (response) => {
    //console.log(response);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
          <img src="images/close-ic.svg" alt="Close" />
        </button>
      </div>
      <div className="modal-body">
        <Formik
          validationSchema={schema}
          onSubmit={(values, actions) => { handleLoginFormSubmit(values, actions) }}
          initialValues={{
            email: '',
            password: '',
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
                <img src="images/emailicon.svg" alt="emailicon" />
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
                <img src="images/pwd.svg" alt="passwordicon" />
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
              <div className="forgetpwd_block">
                <a href="#" onClick={() => handleForgotPasswordOpen()}>
                  Forgot Password?
                </a>
              </div>
              <div className="submit_block">
                <button className="button1" type="submit">
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <span className="or">OR Login with</span>
        <ul className="social_block">
          <li>
            <a href="#">
              <img src="images/fbicon.svg" alt="fbicon" />
            </a>
            {/* <FacebookLogin
              appId="1088597931155576"
              autoLoad
              callback={responseFacebook}
              render={renderProps => (
                <button className="social-login-button" onClick={renderProps.onClick}><img src="/images/fbicon.svg" alt="fbicon" /></button>
              )}
            /> */}
          </li>
          <li>
            <a href="#">
              <img src="images/appleicon.svg" alt="appleicon" />
            </a>
          </li>
          <li>
            <GoogleLogin
              clientId="1234567890-abc123def456.apps.googleusercontent.com"
              render={renderProps => (
                <button className="social-login-button" onClick={renderProps.onClick}><img src="/images/gplus.svg" alt="gplusicon" /></button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </li>
        </ul>
        <div className="signup_block">
          Don’t have an account? <span className="custom-link" onClick={() => handleRegisterOpen()}>Sign Up.</span>
        </div>
      </div>
    </Modal >
  )
}

export default LoginPopup;