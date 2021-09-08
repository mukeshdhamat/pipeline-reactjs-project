import React from 'react';
import toast from 'react-hot-toast';

let toastParameters = {
	duration: 4000,
	style: {
		width: '18rem',
		height: '50px',
		paddingRight: '5px',
		marginRight: '5px'
	},
	// Aria
	role: 'status',
	ariaLive: 'polite',
};

export default function toastMessage(type, message) {
	if (type === 'success-xs') {
		toastParameters.style.width = '12rem';
		toast.success(message, toastParameters);
	} else if (type === 'success-small') {
		toastParameters.style.width = '14rem';
		toast.success(message, toastParameters);
	} else if (type === 'success') {
		toastParameters.style.width = '18rem';
		toast.success(message, toastParameters);
	} else if (type === 'success-large') {
		toastParameters.style.width = '22rem';
		toast.success(message, toastParameters);
	} else if (type === 'success-xl') {
		toastParameters.style.width = '25rem';
		toast.success(message, toastParameters);
	} else if (type === 'error-xs') {
		toastParameters.style.width = '12rem';
		toast.error(message, toastParameters);
	} else if (type === 'error-small') {
		toastParameters.style.width = '14rem';
		toast.error(message, toastParameters);
	} else if (type === 'error') {
		toastParameters.style.width = '18rem';
		toast.error(message, toastParameters);
	} else if (type === 'error-large') {
		toastParameters.style.width = '22rem';
		toast.error(message, toastParameters);
	} else if (type === 'error-xl') {
		toastParameters.style.width = '25rem';
		toast.error(message, toastParameters);
	}
}
