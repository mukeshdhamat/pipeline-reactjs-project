import { tripConstants } from './contants';
import getTrips from '../services/trip/getTrips';

const TripActions = {
    getTripsAction
};

export default TripActions;

function getTripsAction() {
    return dispatch => {
        dispatch(request());
        getTrips()
            .then(
                trips => {
                    dispatch(success(trips));
                }
            );
    };

    function request() { return { type: tripConstants.GET_PROPERTY_REQUEST } }
    function success(trips) { return { type: tripConstants.GET_PROPERTY_SUCCESS, trips } }
}