import React from "react";
import { create } from "react-test-renderer";
import UserItem from "./UserItem";

describe("User item component", () => {
    test("Matches the snapshot", () => {
        const component = create(<UserItem item={{
            "id": "8kku2p",
            "email": "test@qwe.com",
            "phone": "+7 123 975 7777",
            "name": "Mark R"
        }}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
