import { customerConstants } from '../actions/contants';

const initState = {
  isLoading: '',
  isRegistered: false,
  isLogin: false,
  isForgotPassword: false,
  isResetPassword: false,
  isVerifyEmail: false,
  userData: {},
  userToken: "",
  isUserLoggedIn: false,
}
const Customers = (state = initState, action) => {
  switch (action.type) {
    case customerConstants.REGISTER_CUSTOMER_REQUEST:
      return {
        ...state,
        isLoading: 'loading-start',
        isRegistered: false
      };
    case customerConstants.REGISTER_CUSTOMER_SUCCESS:
      return {
        ...state,
        isLoading: 'loading-end',
        isRegistered: true
      };
    case customerConstants.REGISTER_CUSTOMER_FAILURE:
      return {
        ...state,
        isLoading: 'loading-end',
        isRegistered: false
      };
    case customerConstants.CUSTOMER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: 'loading-start',
        isLogin: false,
      };
    case customerConstants.CUSTOMER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: 'loading-end',
        isLogin: true,
        userData: action?.response?.data,
        userToken: action?.response?.extra_meta?.token,
        isUserLoggedIn: true
      };
    case customerConstants.CUSTOMER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: 'loading-end',
        isLogin: false
      };
    case customerConstants.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: 'loading-start',
        isForgotPassword: false
      };
    case customerConstants.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: 'loading-end',
        isForgotPassword: true
      };
    case customerConstants.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: 'loading-end',
        isForgotPassword: false
      };
    case customerConstants.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: 'loading-start',
        isResetPassword: false
      };
    case customerConstants.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: 'loading-end',
        isResetPassword: true
      };
    case customerConstants.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: 'loading-end',
        isResetPassword: false
      };
    case customerConstants.VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        isLoading: 'loading-start',
        isVerifyEmail: false
      };
    case customerConstants.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: 'loading-end',
        isVerifyEmail: true
      };
    case customerConstants.VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        isLoading: 'loading-end',
        isVerifyEmail: false
      };
    case customerConstants.GET_CUSTOMER_DETAILS_REQUEST:
      return {
        ...state,
        isUserLoggedIn: false
      };
    case customerConstants.GET_CUSTOMER_DETAILS_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        userData: action?.response?.data
      };
    case customerConstants.GET_CUSTOMER_DETAILS_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false
      };
    case customerConstants.CUSTOMER_LOGOUT_SUCCESS:
      return {
        ...state,
        userData: {},
        userToken: "",
        isUserLoggedIn: false,
      };
    default:
      return state
  }
}

export default Customers;