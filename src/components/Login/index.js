import React from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import style from "./index.module.scss";

const Login = props => {
  const { errors } = props.state;

  return (
    <div className={style.login}>
      <h1 className={`${style.title} title`}>Servers app</h1>
      <form className={style.form} onSubmit={e => e.preventDefault()}>
        <div className={style.usernameContainer}>
          <label className={`${style.label} body`} htmlFor="username">
            Username:
          </label>
          <input
            className={`${style.input} body`}
            type="text"
            name="username"
            autoComplete="username"
            value={props.username}
            onChange={props.inputAction}
          />
          <br />
          {errors.username && (
            <p className={`${style.error} body`}>{errors.username}</p>
          )}
          <p className={`${style.reminder} body`}>
            Psst, it's "tesonet"{" "}
            <span role="img" aria-label="Winking emoji">
              &#128521;
            </span>
          </p>
        </div>
        <div>
          <label className={`${style.label} body`} htmlFor="password">
            Password:
          </label>
          <input
            className={`${style.input} body`}
            type="password"
            name="password"
            autoComplete="current-password"
            value={props.password}
            onChange={props.inputAction}
          />
          <br />
          {errors.password && (
            <p className={`${style.error} body`}>{errors.password}</p>
          )}
          <p className={`${style.reminder} body`}>It's "partyanimal"</p>
        </div>
        <button
          type="submit"
          className={`${style.button} button`}
          onClick={() => {
            props.loginThunkAction(props.state);
          }}
        >
          Login
        </button>
        {errors.server && (
          <p className={`${style.serverError} body`}>{errors.server}</p>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { state: state.loginReducer };
};

export default connect(mapStateToProps, actions)(Login);
