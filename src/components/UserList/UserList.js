import React from "react";
import UserItemContainer from "../../containers/UserItemContainer";
const UserList = ({ userList }) => {
    return (
        <div>
            {userList.map((item, i) => (
                <UserItemContainer key={i} item={item} />
            ))}
        </div>
    );
};

export default UserList;
