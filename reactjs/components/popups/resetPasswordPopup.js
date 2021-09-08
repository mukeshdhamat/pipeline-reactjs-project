import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { Modal,  Form } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import { regex } from '../../utils/regex';
import toastMessage from '../../utils/toastMessage';

const schema = yup.object().shape({
  //oldPassword: yup.string().required('Password is required'),
  password: yup.string().min(8, 'Please enter at least 8 characters and max 25').max(25, 'Please enter at least 8 characters and max 25').required('Password is required').matches(regex.password, 'Password must contain atleast 1 alphabet, 1 number and 1 special character.'),
  confirmPassword: yup.string().required('Confirm Password is required').when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "Password and Confirm Password is not matching"
    )
  })
});

const ResetPasswordPopup = ({ ...props }) => {
  const { show, handleClose, handleLoginOpen, isResetPassword, resetPassword, token } = props;
  const router = useRouter()

  useEffect(() => {
    if(isResetPassword && show){
      toastMessage('success', 'Password reset successfully!');
      handleLoginOpen();
      handleClose();
    }
  }, [isResetPassword])

  const handleResetPasswordFormSubmit = async (values, actions) => {
		if (values) {
			let finalData = values;
      if(token){
        let requestData = {
          password: finalData['password'],
          token: token
        };
			  const changePassword = await resetPassword(requestData);
      }
		}
	}

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Reset Password</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
          <img src="images/close-ic.svg" alt="Close" />
        </button>
      </div>
      <div className="modal-body">
      <Formik
          validationSchema={schema}
          onSubmit={(values, actions) => { handleResetPasswordFormSubmit(values, actions) }}
          initialValues={{
            //oldPassword: '',
            password: '',
            confirmPassword: ''
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
              {/* <div className="form-group">
                <img src="images/pwd.svg" alt="Old Password" />
                <Form.Control
                  type="password"
                  name="oldPassword"
                  placeholder="Old Password"
                  value={values.oldPassword}
                  onChange={handleChange}
                  isValid={touched.oldPassword && !errors.oldPassword}
                  className="no-active-form-input"
                  autoComplete="off"
                />
                {errors.oldPassword && touched.oldPassword &&
                  <div className="error-msg">
                    {errors.oldPassword}
                  </div>
                }
              </div> */}
              <div className="form-group">
                <img src="images/pwd.svg" alt="New Password" />
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
              <div className="form-group">
                <img src="images/pwd.svg" alt="Confirm Password" />
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  isValid={touched.confirmPassword && !errors.confirmPassword}
                  className="no-active-form-input"
                  autoComplete="off"
                />
                {errors.confirmPassword && touched.confirmPassword &&
                  <div className="error-msg">
                    {errors.confirmPassword}
                  </div>
                }
              </div>
              <div className="submit_block">
                <button className="button1" type="submit">
                  Reset Password
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal >
  )
}

export default ResetPasswordPopup;