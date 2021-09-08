import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { Modal } from "react-bootstrap";
import toastMessage from '../../utils/toastMessage';

const VerifyEmailPopup = ({ ...props }) => {
  const { show, handleClose, handleLoginOpen, isVerifyEmail, verifyEmail, token } = props;
  const router = useRouter();

  useEffect(async () => {
    if(token && show){
      let requestData = {
        token: token
      };
      const checkEmailVerfy = await verifyEmail(requestData);
    }
  }, [token, show])

  useEffect(() => {
    if(isVerifyEmail && show){
      toastMessage('success-large', 'Email is verifed successfully!');
      handleLoginOpen();
      handleClose();
    }
  }, [isVerifyEmail])

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Verify Email</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
          <img src="images/close-ic.svg" alt="Close" />
        </button>
      </div>
      <div className="modal-body">
        <div className="img-box text-center">
          <img src="images/forgot-password-img.svg" alt="" />
          <p className="mt-3 mb-3">Your Email verification is in process for sign in to The Luxury Trips</p>
          <p>Please wait for Email Verification process ....</p>
        </div>
      </div>
    </Modal >
  )
}

export default VerifyEmailPopup;