import userReducer from "./user-reducer";
import {
    setUserList,
    inputSearchValue,
    onClickAddUser,
    inputNewUserPhoneValue,
    inputNewUserNameValue,
    inputNewUserEmailValue,
} from "./actions";

it("user list should be updated", () => {
    const state = {
        userList: [],
    };
    const userList = [
        {
            id: "dq48m4",
            email: "test@qwe.com",
            phone: "+7 345 987 71212",
            name: "Igor K. L.",
        },
        {
            id: "fmz7d8",
            email: "test3@qwe.com",
            phone: "79137594779",
            name: "",
        },
    ];
    const action = setUserList(userList);
    const newState = userReducer(state, action);
    expect(newState.userList.length).toBe(2);
});
it("filtred user list should be updated", () => {
    const state = {
        userList: [
            {
                id: "dq48m4",
                email: "test@qwe.com",
                phone: "+7 345 987 71212",
                name: "Igor K. L.",
            },
            {
                id: "fmz7d8",
                email: "test3@qwe.com",
                phone: "79137594779",
                name: "",
            },
        ],
        search: "",
        filteredUserList: [],
    };
    const action = inputSearchValue("7345");
    const newState = userReducer(state, action);
    expect(newState.filteredUserList.length).toBe(1);
});
it("check add user should be true", () => {
    const state = {
        checkAddUser: false,
    };
    const action = onClickAddUser();
    const newState = userReducer(state, action);
    expect(newState.checkAddUser).toBe(true);
});
it("new user's phone should change", () => {
    const state = {
        newUser: {
            name: "",
            phone: "",
            email: "",
        },
    };
    const action = inputNewUserPhoneValue("+7 345 987 71215");
    const newState = userReducer(state, action);
    expect(newState.newUser.phone).toBe("+7 345 987 71215");
});
it("new user's name should change", () => {
    const state = {
        newUser: {
            name: "",
            phone: "",
            email: "",
        },
    };
    const action = inputNewUserNameValue("Bagi");
    const newState = userReducer(state, action);
    expect(newState.newUser.name).toBe("Bagi");
});
it("new user's email should change", () => {
    const state = {
        newUser: {
            name: "",
            phone: "",
            email: "",
        },
    };
    const action = inputNewUserEmailValue("test@qwe.com");
    const newState = userReducer(state, action);
    expect(newState.newUser.email).toBe("test@qwe.com");
});
