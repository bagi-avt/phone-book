import { getUserList, deleteUser, createUser, updataUser } from "../api/api";
import * as types from "./types";

export const setUserList = (userList) => ({
    type: types.SET_USER_LIST,
    userList,
});

export const getUserListTC = () => (dispatch) => {
    getUserList().then((userList) => {
        dispatch(setUserList(userList));
    });
};
export const deleteUserTC = (phone_id) => (dispatch) => {
    deleteUser(phone_id).then(() => {
        dispatch(getUserListTC());
    });
};
export const createUserTC = (data) => (dispatch) => {
    createUser(data).then(() => {
        dispatch(getUserListTC());
    });
};
export const updataUserTC = (data) => (dispatch) => {
    updataUser(data)
        .then(() => {
            dispatch(getUserListTC());
        })
        .catch(() => {});
};
export const onClickAddUser = () => ({
    type: types.ON_CLICK_ADD_USER,
});
export const inputSearchValue = (text) => ({
    type: types.INPUT_SEARCH_VALUE,
    text,
});
export const inputNewUserPhoneValue = (value) => ({
    type: types.INPUT_NEW_USER_PHONE_VALUE,
    value,
});
export const inputNewUserNameValue = (value) => ({
    type: types.INPUT_NEW_USER_NAME_VALUE,
    value,
});
export const inputNewUserEmailValue = (value) => ({
    type: types.INPUT_NEW_USER_EMAIL_VALUE,
    value,
});
