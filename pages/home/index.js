import { connect } from "react-redux";
import Home from "./homePage";
import { CustomerActions } from "../../actions";
import { getUserProps, getPopularDeals, getOffers } from "../../utils/commonFunctions";

const mapStateToProps = (state, ownProps) => {
    let userData = ownProps?.userData || state.customer.userData;
    let isUserLoggedIn = ownProps?.isUserLoggedIn || state.customer.isUserLoggedIn;
    console.log("state in home", state);
    return {
        isLoading: state.customer.isLoading,
        isRegistered: state.customer.isRegistered,
        isLogin: state.customer.isLogin,
        isForgotPassword: state.customer.isForgotPassword,
        isResetPassword: state.customer.isResetPassword,
        isVerifyEmail: state.customer.isVerifyEmail,
        userData,
        isUserLoggedIn,
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

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export async function getServerSideProps({ req, res }) {
    const token = req.cookies.token;
    const userDetails = await getUserProps(token);
    const popularDeals = await getPopularDeals();
    const offers = await getOffers();
    const response = {
        props : {
            userData: userDetails?.userData || {},
            userToken: userDetails?.userToken || "",
            isUserLoggedIn: userDetails?.isUserLoggedIn || false,
            offers: offers || [],
            popularDeals: popularDeals || []
        }
    }
    return response;
}

export default HomeContainer;