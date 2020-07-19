import { connect } from "react-redux";
import UserItem from "../components/UserItem/UserItem";
import { deleteUserTC, updataUserTC } from "../redux/actions";

const mapDispatchToProps = { deleteUserTC, updataUserTC };

export default connect(() => {}, mapDispatchToProps)(UserItem);
