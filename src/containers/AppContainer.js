import { connect } from "react-redux";
import { inputSearchValue, onClickAddUser } from "../redux/actions";
import App from "../components/App";
const mapStateToProps = (state) => ({
    search: state.userPage.search,
    checkAddUser: state.userPage.checkAddUser,
});
const mapDispatchToProps = { inputSearchValue, onClickAddUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
