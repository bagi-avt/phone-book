import React from "react";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import UserListContainer from "../containers/UserListContainer";
import AddUserContainer from "../containers/AddUserContainer";

const App = ({ search, inputSearchValue, checkAddUser, onClickAddUser }) => {
    const onChange = (e) => {
        inputSearchValue(e.target.value);
    };
    return (
        <div className="container">
            <h1>Phone book!</h1>
            <Input
                className="search"
                placeholder="Поиск"
                value={search}
                onChange={onChange}
            />
            <UserListContainer />
            {checkAddUser && <AddUserContainer />}
            <Button
                className="button-plus"
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                size="large"
                onClick={onClickAddUser}
            />
        </div>
    );
};

export default App;
