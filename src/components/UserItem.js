import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { IMaskInput } from "react-imask";
import {
    EditOutlined,
    DeleteOutlined,
    CheckOutlined,
    CloseOutlined,
} from "@ant-design/icons";

const UserItem = ({ item, deleteUserTC, updataUserTC }) => {
    const [user, setUser] = useState({
        id: item.id,
        name: item.name,
        phone: item.phone,
        email: item.email,
    });
    const [selectedUser, setSelectedUser] = useState(false);
    const onClickDeleteUser = () => {
        deleteUserTC(item.id);
    };
    const onClickUpdataUser = () => {
        if (
            user.name !== item.name &&
            user.phone !== item.phone &&
            user.email !== item.email
        ) {
            updataUserTC(user);
        }
        setSelectedUser(!selectedUser);
    };
    return (
        <>
            {!selectedUser && (
                <Row>
                    {["phone", "name", "email"].map((key) => (
                        <Col span={6} className="user-info" key={key}>
                            {item[key]}
                        </Col>
                    ))}
                    <Col span={6}>
                        <Button
                            className="button-edit"
                            type="primary"
                            shape="circle"
                            icon={<EditOutlined />}
                            size="large"
                            onClick={() => {
                                setSelectedUser(!selectedUser);
                            }}
                        />
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<DeleteOutlined />}
                            size="large"
                            onClick={onClickDeleteUser}
                        />
                    </Col>
                </Row>
            )}
            {selectedUser && (
                <Row>
                    <Col span={6} className="user-info">
                        <IMaskInput
                            placeholder="Номер телефона"
                            type="text"
                            mask="+{7} 000 000 0000"
                            value={user.phone}
                            onChange={(e) => {
                                setUser({ ...user, phone: e.target.value });
                            }}
                        />
                    </Col>
                    <Col span={6} className="user-info">
                        <IMaskInput
                            placeholder="Имя"
                            type="text"
                            value={user.name}
                            onChange={(e) => {
                                setUser({ ...user, name: e.target.value });
                            }}
                        />
                    </Col>
                    <Col span={6} className="user-info">
                        <IMaskInput
                            placeholder="Email"
                            type="email"
                            value={user.email}
                            onChange={(e) => {
                                setUser({ ...user, email: e.target.value });
                            }}
                        />
                    </Col>
                    <Col span={6}>
                        <Button
                            className="button-edit-true button-edit"
                            shape="circle"
                            icon={<CheckOutlined />}
                            size="large"
                            onClick={onClickUpdataUser}
                        />
                        <Button
                            className="button-edit-false"
                            shape="circle"
                            icon={<CloseOutlined />}
                            size="large"
                            onClick={() => {
                                setSelectedUser(!selectedUser);
                            }}
                        />
                    </Col>
                </Row>
            )}
        </>
    );
};

export default UserItem;
