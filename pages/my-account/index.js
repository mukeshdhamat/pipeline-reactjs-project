import { connect } from "react-redux";
import MyAccountPage from "./myAccountPage";
import { CustomerActions } from "../../actions";
import { getUserStaicProps } from "../../utils/commonFunctions";

const mapStateToProps = (state, ownProps) => {
    let userData = ownProps?.userData || state.myAccount.userData;
    let isUserLoggedIn = ownProps?.isUserLoggedIn || state.myAccount.isUserLoggedIn;
    return {
        userData,
        isUserLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserIsLoggedOut: () => dispatch(CustomerActions.setUserIsLoggedOutAction())
    };
};

export async function getServerSideProps({ req, res }) {
    return getUserStaicProps(req);
}

const MyAccountContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyAccountPage);

export default MyAccountContainer;