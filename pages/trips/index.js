import { connect } from "react-redux";
import Trip from "./tripPage";
import { TripActions } from "../../actions";

const mapStateToProps = (state) => {
    return {
        trips: state.trip.trips
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTrips: () => dispatch(TripActions.getTripsAction())
    };
};

const TripContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Trip);

export default TripContainer;