import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Layout } from "antd";
import store from "./redux/store";
import App from "./containers/AppContainer";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
