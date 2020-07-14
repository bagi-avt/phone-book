import { connect } from "react-redux";
import UserItem from "../components/UserItem";
import { deleteUserTC, updataUserTC } from "../redux/actions";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = { deleteUserTC, updataUserTC };

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
