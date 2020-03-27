import React from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import style from "./index.module.scss";

const List = props => {
  React.useEffect(() => {
    props.getListThunkAction();
  }, []);

  const renderList = () => {
    return props.state.map((item, index) => {
      return (
        <li className={style.item} key={index}>
          <div className="body">{item.name}</div>
          <div className="body">{item.distance}</div>
        </li>
      );
    });
  };

  return (
    <div className={style.list}>
      <button
        className={`${style.logoutButton} button button--logout`}
        onClick={props.logoutAction}
      >
        Log out
      </button>
      <h2 className={`${style.title} title`}>Well done, here's your list!</h2>
      <div className={style.buttonsContainer}>
        <button className="button button--sort" onClick={props.sortNameAction}>
          Sort by name
        </button>
        <button
          className="button button--sort"
          onClick={props.sortDistanceAction}
        >
          Sort by distance
        </button>
      </div>
      <div className={`${style.attributesContainer} body`}>
        <h4>Name:</h4>
        <h4>Distance:</h4>
      </div>
      <ul>{renderList()}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { state: state.listReducer };
};

export default connect(mapStateToProps, actions)(List);
