import * as types from "./types";

const initialState = {
    userList: [],
    search: "",
    filteredUserList: [],
    checkAddUser: false,
    newUser: {
        name: "",
        phone: "",
        email: "",
    },
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LIST_USERS:
            return {
                ...state,
                search: "",
                userList: action.userList.filter((item) => item !== null),
                filteredUserList: action.userList.filter(
                    (item) => item !== null
                ),
            };
        case types.INPUT_SEARCH_VALUE:
            return {
                ...state,
                search: action.text,
                filteredUserList: state.userList.filter(
                    (item) =>
                        item.name
                            .toLocaleLowerCase()
                            .includes(action.text.toLocaleLowerCase()) ||
                        item.phone
                            .replace(/\s+/g, "")
                            .includes(action.text.replace(/\s+/g, "")) ||
                        item.email
                            .toLocaleLowerCase()
                            .includes(action.text.toLocaleLowerCase())
                ),
            };
        case types.ON_CLICK_ADD_USER:
            return {
                ...state,
                checkAddUser: !state.checkAddUser,
            };
        case types.INPUT_NEW_USER_PHONE_VALUE:
            return {
                ...state,
                newUser: { ...state.newUser, phone: action.value },
            };
        case types.INPUT_NEW_USER_NAME_VALUE:
            return {
                ...state,
                newUser: { ...state.newUser, name: action.value },
            };
        case types.INPUT_NEW_USER_EMAIL_VALUE:
            return {
                ...state,
                newUser: { ...state.newUser, email: action.value },
            };
        default:
            return state;
    }
};
export default userReducer;
