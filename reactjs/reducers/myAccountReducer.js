import { myAccountConstants } from '../actions/contants';

const initState = {
  isLoading: '',
  isUpdateProfile: false,
  userData: {},
  isUserLoggedIn: false,
}
const MyAccount = (state = initState, action) => {
  switch (action.type) {
    case myAccountConstants.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: 'loading-start',
        isUpdateProfile: false
      };
    case myAccountConstants.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: 'loading-end',
        userData: action?.data,
        isUpdateProfile: true
      };
    case myAccountConstants.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: 'loading-end',
        isUpdateProfile: false
      };
      case myAccountConstants.REFRESH_MY_PROFILE_STATE_SUCCESS:
        return {
          ...state,
          isLoading: '',
          isUpdateProfile: false,
        };
    default:
      return state
  }
}

export default MyAccount;