import React from "react";
import { connect } from "react-redux";

import Login from "../Login/";
import List from "../List/";
import Loader from "../Loader/";
import "./index.scss";

const App = props => {
  const renderContent = () => {
    if (props.state.isLoggedIn) {
      return <List />;
    } else if (!props.state.isLoggedIn && props.state.isLoading) {
      return <Loader />;
    }
    return <Login />;
  };

  return (
    <div className="container">
      <div>{renderContent()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { state: state.loginReducer };
};

export default connect(mapStateToProps)(App);
