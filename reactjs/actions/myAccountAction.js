import { myAccountConstants } from './contants';
import updateProfile from '../services/myAccount/updateProfile';
import { setUserData } from '../utils/commonFunctions';

const updateProfileAction = (data) => {

    const request = () => { return { type: myAccountConstants.UPDATE_PROFILE_REQUEST } }
    const success = () => { return { type: myAccountConstants.UPDATE_PROFILE_SUCCESS } }
    const failure = () => { return { type: myAccountConstants.UPDATE_PROFILE_FAILURE } }

    return dispatch => {
        dispatch(request());
        updateProfile(data).then(response => {
            if (response) {
                setUserData(response?.data);
                dispatch(success(response));
            } else {
                dispatch(failure());
            }
        });
    };
}

const refreshProfileStateAction = () => {
    const success = () => { return { type: myAccountConstants.REFRESH_MY_PROFILE_STATE_SUCCESS } }

    return dispatch => {
        dispatch(success());
    };
}

const MyAccountActions = {
    updateProfileAction,
    refreshProfileStateAction
};

export default MyAccountActions;