import { tripConstants } from '../actions/contants';

const initState = {
    trips: []
}
function Trips(state = initState, action) {
    switch (action.type) {
        case tripConstants.GET_PROPERTY_SUCCESS:
            return {
                ...state,
                trips: action.trips
            };
        default:
            return state
    }
}

export default Trips;