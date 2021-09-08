import { connect } from "react-redux";
import MyProfilePage from "./myProfilePage";
import { MyAccountActions } from "../../actions";
import { getUserProps } from "../../utils/commonFunctions";

const mapStateToProps = (state, ownProps) => {
    let userData = ownProps?.userData || state.myAccount.userData;
    let isUserLoggedIn = ownProps?.isUserLoggedIn || state.myAccount.isUserLoggedIn;

    return {
        isLoading: state.myAccount.isLoading,
        isUpdateProfile: state.myAccount.isUpdateProfile,
        userData,
        isUserLoggedIn,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (data) => dispatch(MyAccountActions.updateProfileAction(data)),
        refreshProfileState: () => dispatch(MyAccountActions.refreshProfileStateAction()),
    };
};

const MyProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProfilePage);

export async function getServerSideProps({ req, res }) {
    const token = req.cookies.token;
    const userDetails = await getUserProps(token);
    const response = {
        props : {
            userData: userDetails?.userData || {},
            userToken: userDetails?.userToken || "",
            isUserLoggedIn: userDetails?.isUserLoggedIn || false
        }
    }
    return response;
}

export default MyProfileContainer;