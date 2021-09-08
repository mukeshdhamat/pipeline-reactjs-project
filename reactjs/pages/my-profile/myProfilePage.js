import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import { Form } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import toastMessage from '../../utils/toastMessage';
import { handleAlphaNumericInput, handleNumericInput, handleNoInput, setBirthDayFormat, setMobileNumberFormat } from '../../utils/commonFunctions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Link from 'next/link';

const schema = yup.object().shape({
  firstName: yup.string().min(1, 'Please enter at least 1 characters').max(25, 'Please enter max 25 characters').required('First name is required'),
  lastName: yup.string().min(1, 'Please enter at least 1 characters').max(25, 'Please enter max 25 characters').required('Last name is required'),
  email: yup.string().min(1, 'Please enter at least 1 characters').max(25, 'Please enter max 25 characters').email('Enter valid email').required('Email is required'),
  mobileNumber: yup.string().min(10, 'Please enter at least 10 characters').max(13, 'Please enter max 13 characters').required('Mobile number is required'),
  location: yup.string().required('Select Location'),
  dob: yup.string().required('Birthday is required'),
});

const MyProfile = ({ ...props }) => {
  const { userData, updateProfile, isUserLoggedIn, isLoading, isUpdateProfile, refreshProfileState } = props;
  useEffect(() => {
    if (isUpdateProfile) {
      toastMessage('success-large', 'Profile update successfully!');
    }
  }, [isUpdateProfile])

  const handleProfileFormSubmit = async (values, actions) => {
    let finalData = { ...values};
    delete finalData.email;
    finalData.birthday = setBirthDayFormat(finalData.birthday);
    finalData.mobileNumber = setMobileNumberFormat(finalData.mobileNumber);
    const updateCustomer = await updateProfile(finalData);
  }

  const handleRefresh = async () => {
    refreshProfileState();
  }

  return (
    <Layout isUserLoggedIn={isUserLoggedIn} isLoading={isLoading}>
      <div>
        <section className="my-profile-section search-header-mr-top">
          <div className="container">
            <div className="my-account-back-box" onClick={() => handleRefresh()}>
              <Link href="/my-account">
                <a><img src="images/back-ic.svg" alt="" /> My Account</a>
              </Link>
            </div>
            <div className="my-account-header-box">
              <h3>Personal Details</h3>
            </div>
            <Formik
              validationSchema={schema}
              onSubmit={(values, actions) => { handleProfileFormSubmit(values, actions) }}
              initialValues={{
                firstName: userData?.firstName || '',
                lastName: userData?.lastName || '',
                email: userData?.email || '',
                mobileNumber: userData?.mobileNumber ? `91 ${userData?.mobileNumber}` : '',
                location: userData?.location || '',
                dob: userData?.dob ? new Date(userData?.dob) : ''
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                setFieldValue,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit} className="myprofile">
                  <div className="my-account-common-box">
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label>First Name</label>
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
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label>Last Name</label>
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
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <PhoneInput
                            name="mobileNumber"
                            country={'in'}
                            onlyCountries={['in', 'us', 'ca']}
                            value={values.mobileNumber}
                            isValid={touched.mobileNumber && !errors.mobileNumber}
                            className="form-control"
                            onChange={(mobileNumber) => setFieldValue('mobileNumber', mobileNumber)}
                          />
                          {errors.mobileNumber && touched.mobileNumber &&
                            <div className="error-msg">
                              {errors.mobileNumber}
                            </div>
                          }
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <Form.Control
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                            className="no-active-form-input"
                            autoComplete="off"
                            readOnly
                            disabled
                            onKeyDown={(event) => handleNoInput(event)}
                          />
                          {errors.email && touched.email &&
                            <div className="error-msg">
                              {errors.email}
                            </div>
                          }
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label>Country</label>
                          <Form.Control
                            as="select"
                            name="location"
                            placeholder="Location"
                            value={values.location}
                            onChange={handleChange}
                            isValid={touched.location && !errors.location}
                            className="no-active-form-input-select"
                          >
                            <option value="" disabled={true}>Location</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                          </Form.Control>
                          {errors.location && touched.location &&
                            <div className="error-msg">
                              {errors.location}
                            </div>
                          }
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="form-group">
                          <label>Birthday</label>
                          <DatePicker
                            showMonthDropdown
                            showYearDropdown
                            maxDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            selected={values.dob}
                            name="dob"
                            onChange={(date) => setFieldValue('dob', date)}
                            isValid={touched.dob && !errors.dob}
                            onKeyDown={(event) => handleNoInput(event)}
                            placeholderText={"DD/MM/YYYY"}
                            autoComplete={"off"}
                          />
                          {errors.dob && touched.dob &&
                            <div className="error-msg">
                              {'Birthday is required'}
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="save-btn text-center mt-3">
                      <button className="btn-primary" type="submit">Save Changes</button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default MyProfile;