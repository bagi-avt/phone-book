import React from "react";
import renderer from "react-test-renderer";
import AddUser from "./AddUser";

jest.mock('react-imask')

describe("User item component", () => {
    test("Matches the snapshot", () => {
        const component = renderer.create(<AddUser newUser={{
            name: "",
            phone: "",
            email: "",
        }}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});