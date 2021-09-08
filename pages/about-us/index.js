import { connect } from "react-redux";
import AboutUsPage from "./aboutUsPage";
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
        registerCustomer: (data) => dispatch(CustomerActions.registerCustomerAction(data)),
        customerLogin: (data) => dispatch(CustomerActions.customerLoginAction(data)),
        forgotPassword: (data) => dispatch(CustomerActions.forgotPasswordAction(data)),
        resetPassword: (data) => dispatch(CustomerActions.resetPasswordAction(data)),
        verifyEmail: (data) => dispatch(CustomerActions.verifyEmailAction(data)),
        setLoggedInUserDetails: (token) => dispatch(CustomerActions.setLoggedInUserDetailsAction(token)),
        setUserIsLoggedOut: () => dispatch(CustomerActions.setUserIsLoggedOutAction())
    };
};

export async function getServerSideProps({ req, res }) {
    return getUserStaicProps(req);
}

const AboutUsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutUsPage);

export default AboutUsContainer;