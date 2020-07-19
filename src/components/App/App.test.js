import React from "react";
import { create } from "react-test-renderer";
import App from "./App";
import store from "../../redux/store";
import {Provider} from "react-redux";

describe("User item component", () => {
    test("Matches the snapshot", () => {
        const component = create(<Provider store={store}><App/></Provider>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
