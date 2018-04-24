import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { connect } from 'react-redux';
import { Provider } from "react-redux";
import store from "./store";

const mapStateToProps = state => {
  return {
  data : state.profiles,
}}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onChange: value => {
//       ()
//     }
//   }
// }


const ConnectedApp = connect(
    mapStateToProps
)(App)


console.log("store.getState() in index.js incoming");
console.dir(store.getState());

ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
