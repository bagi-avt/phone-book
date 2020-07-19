import React from "react";
import { create } from "react-test-renderer";
import UserList from "./UserList";
import store from "../../redux/store";
import {Provider} from "react-redux";

describe("User list component", () => {
    test("Matches the snapshot", () => {
        const component = create(<Provider store={store}>
            <UserList userList={[{
            "id": "aunbos",
            "email": "test@qwe.com",
            "phone": "+7 345 543 7979",
            "name": "Vladislav G"
        },{
            "id": "8kku2p",
            "email": "test@qwe.com",
            "phone": "+7 123 975 7777",
            "name": "Mark R"
        }]} />
        </Provider>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
