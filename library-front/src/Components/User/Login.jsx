import React from "react";
import "./User.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login__Container">
      <div className="Login">
        <h1>Welcome to Magic Library</h1>
        <div className="sections">
          <div className="left--section">
            <input type="email" name="" id="" placeholder="E-mail"/>
            <input type="password" name="" id="" placeholder="password"/>
            <button type="button">login</button>
          </div>

        </div>
        <div className="bottom__section">
          <p>
            Forget your password? Recover{" "}
            <Link to={"/magic-labrary/front/recover"}>Here</Link>
          </p>
          <p>
            Don't have an account? Register{" "}
            <Link to={"/magic-labrary/front/register"}>Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
