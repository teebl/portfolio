import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "./store";
import { nextProfile } from "./actions/index.js";

const mapStateToProps = state => {
  return {
    data: state.profiles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextProfilePress: () => {
      dispatch(nextProfile());
    }
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
