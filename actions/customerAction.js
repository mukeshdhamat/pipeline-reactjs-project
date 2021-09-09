import { customerConstants } from './contants';
import registerCustomer from '../services/customer/registerCustomer';
import customerLogin from '../services/customer/customerLogin';
import forgotPassword from '../services/customer/forgotPassword';
import resetPassword from '../services/customer/resetPassword';
import verifyEmail from '../services/customer/verifyEmail';
import { getCustomerDetails } from '../services/customer/getCustomerDetails';
import { setToken, removeToken , setUserData, removeUserData } from '../utils/commonFunctions';

const registerCustomerAction = (data) => {

    const request = () => { return { type: customerConstants.REGISTER_CUSTOMER_REQUEST } }
    const success = () => { return { type: customerConstants.REGISTER_CUSTOMER_SUCCESS } }
    const failure = () => { return { type: customerConstants.REGISTER_CUSTOMER_FAILURE } }

    return dispatch => {
        dispatch(request());
        registerCustomer(data).then(response => {
            if (response) {
                dispatch(success());
            } else {
                dispatch(failure());
            }
        });
    };
}

const customerLoginAction = (data) => {

    const request = () => { return { type: customerConstants.CUSTOMER_LOGIN_REQUEST } }
    const success = (response) => { return { type: customerConstants.CUSTOMER_LOGIN_SUCCESS, response } }
    const failure = () => { return { type: customerConstants.CUSTOMER_LOGIN_FAILURE } }

    return dispatch => {
        dispatch(request());
        customerLogin(data).then(response => {
            if (response) {
                setToken(response?.extra_meta?.token);
                setUserData(response?.data);
                dispatch(success(response));
            } else {
                dispatch(failure());
            }
        });
    };
}

const forgotPasswordAction = (data) => {

    const request = () => { return { type: customerConstants.FORGOT_PASSWORD_REQUEST } }
    const success = () => { return { type: customerConstants.FORGOT_PASSWORD_SUCCESS } }
    const failure = () => { return { type: customerConstants.FORGOT_PASSWORD_FAILURE } }

    return dispatch => {
        dispatch(request());
        forgotPassword(data).then(response => {
            if (response) {
                dispatch(success());
            } else {
                dispatch(failure());
            }
        });
    };
}

const resetPasswordAction = (data) => {

    const request = () => { return { type: customerConstants.RESET_PASSWORD_REQUEST } }
    const success = () => { return { type: customerConstants.RESET_PASSWORD_SUCCESS } }
    const failure = () => { return { type: customerConstants.RESET_PASSWORD_FAILURE } }

    return dispatch => {
        dispatch(request());
        resetPassword(data).then(response => {
            if (response) {
                dispatch(success());
            } else {
                dispatch(failure());
            }
        });
    };
}

const verifyEmailAction = (data) => {

    const request = () => { return { type: customerConstants.VERIFY_EMAIL_REQUEST } }
    const success = () => { return { type: customerConstants.VERIFY_EMAIL_SUCCESS } }
    const failure = () => { return { type: customerConstants.VERIFY_EMAIL_FAILURE } }

    return dispatch => {
        dispatch(request());
        verifyEmail(data).then(response => {
            if (response) {
                dispatch(success());
            } else {
                dispatch(failure());
            }
        });
    };
}

const setLoggedInUserDetailsAction = (token) => {

    const request = () => { return { type: customerConstants.GET_CUSTOMER_DETAILS_REQUEST } }
    const success = (response) => { return { type: customerConstants.GET_CUSTOMER_DETAILS_SUCCESS, response } }
    const failure = () => { return { type: customerConstants.GET_CUSTOMER_DETAILS_FAILURE } }

    return dispatch => {
        dispatch(request());
        getCustomerDetails(token).then(response => {
            if (response) {
                dispatch(success(response));
            } else {
                dispatch(failure());
            }
        });
    };
}

const setUserIsLoggedOutAction = () => {

    const success = () => { return { type: customerConstants.CUSTOMER_LOGOUT_SUCCESS } }

    return dispatch => {
        removeToken();
        removeUserData();
        dispatch(success());
    };
}



const CustomerActions = {
    registerCustomerAction,
    customerLoginAction,
    forgotPasswordAction,
    resetPasswordAction,
    verifyEmailAction,
    setLoggedInUserDetailsAction,
    setUserIsLoggedOutAction
};

export default CustomerActions;