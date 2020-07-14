import React from "react";
import { Row, Col, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { IMaskInput } from "react-imask";
const AddUser = ({
    onClickAddUser,
    newUser,
    inputNewUserPhoneValue,
    inputNewUserNameValue,
    inputNewUserEmailValue,
    createUserTC,
}) => {
    const onChangeNewUserPhone = (e) => {
        inputNewUserPhoneValue(e.target.value);
    };
    const onChangeNewUserName = (e) => {
        inputNewUserNameValue(e.target.value);
    };
    const onChangeNewUserEmail = (e) => {
        inputNewUserEmailValue(e.target.value);
    };
    const onSend = () => {
        onClickAddUser();
        createUserTC(newUser);
    };
    const clearUserData = () => {
        onClickAddUser();
        inputNewUserPhoneValue("");
        inputNewUserNameValue("");
        inputNewUserEmailValue("");
    };
    return (
        <div>
            <Row>
                <Col span={6} className="user-info">
                    <IMaskInput
                        placeholder="Номер телефона"
                        type="text"
                        mask="+{7} 000 000 0000"
                        value={newUser.phone}
                        onChange={onChangeNewUserPhone}
                    />
                </Col>
                <Col span={6} className="user-info">
                    <IMaskInput
                        placeholder="Имя"
                        type="text"
                        value={newUser.name}
                        onChange={onChangeNewUserName}
                    />
                </Col>
                <Col span={6} className="user-info">
                    <IMaskInput
                        placeholder="Email"
                        type="email"
                        value={newUser.email}
                        onChange={onChangeNewUserEmail}
                    />
                </Col>
                <Col span={6}>
                    <Button
                        className="button-edit-true button-edit"
                        shape="circle"
                        icon={<CheckOutlined />}
                        size="large"
                        onClick={onSend}
                    />
                    <Button
                        className="button-edit-false"
                        shape="circle"
                        icon={<CloseOutlined />}
                        size="large"
                        onClick={clearUserData}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default AddUser;
