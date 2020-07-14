import { connect } from "react-redux";
import {
    onClickAddUser,
    inputNewUserPhoneValue,
    inputNewUserNameValue,
    inputNewUserEmailValue,
    createUserTC,
} from "../redux/actions";
import AddUser from "../components/AddUser";
const mapStateToProps = (state) => ({ newUser: state.userPage.newUser });
const mapDispatchToProps = {
    onClickAddUser,
    inputNewUserPhoneValue,
    inputNewUserNameValue,
    inputNewUserEmailValue,
    createUserTC,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
