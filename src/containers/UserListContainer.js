import { connect } from "react-redux";
import React, { Component } from "react";
import UserList from "../components/UserList/UserList";
import { getUserListTC } from "../redux/actions";

class UserListContainer extends Component {
    componentDidMount() {
        this.props.getUserListTC();
    }

    render() {
        return <UserList {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    userList: state.userPage.filteredUserList,
});
const mapDispatchToProps = { getUserListTC };

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
