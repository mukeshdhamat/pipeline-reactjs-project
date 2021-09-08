import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { Modal, Form } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import toastMessage from '../../utils/toastMessage';

const schema = yup.object().shape({
  email: yup.string().min(1, 'Please enter at least 1 characters').max(25, 'Please enter max 25 characters').email('Enter valid email').required('Email is required')
});

const ForgotPasswordPopup = ({ ...props }) => {
  const { show, handleClose, handleResetPasswordOpen, isForgotPassword, forgotPassword } = props;
  const router = useRouter();

  useEffect(() => {
    if(isForgotPassword && show){
      toastMessage('success-large', 'Link has been sent to your email!');
      handleClose();
    }
  }, [isForgotPassword])

  const handleForgotPasswordFormSubmit = async (values, actions) => {
		if (values) {
			let finalData = values;
			const sendForgotPasswordEmail = await forgotPassword(finalData);
		}
	}
  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Forgot Password</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
          <img src="images/close-ic.svg" alt="Close" />
        </button>
      </div>
      <div className="modal-body">
        <div className="img-box text-center">
          <img src="images/forgot-password-img.svg" alt="" />
          <p className="mt-3 mb-3">Please enter the email you use to sign in to The Luxury Trips</p>
        </div>
        <Formik
          validationSchema={schema}
          onSubmit={(values, actions) => { handleForgotPasswordFormSubmit(values, actions) }}
          initialValues={{
            email: ''
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
              <div className="submit_block">
                <button className="button1" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal >
  )
}

export default ForgotPasswordPopup;