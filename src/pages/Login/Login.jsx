import React from "react";
import "./Login.scss";
import TextInput from "../../components/TextInput/TextInput";
import LoginBtn from "../../components/LoginBtn/LoginBtn";

import Favicon from "../../assets/favicon.png";
import LoginBg from "../../assets/background.png";
import { FormControl, Checkbox } from "@mui/material";

function Login() {
  return (
    <div className="container">
      <div className="login">
        <div className="login__brand">
          <img src={Favicon} width={"60px"} />
          <h1>SkyEdge</h1>
        </div>

        <div className="login__content">
          <div className="login__title">
            <h1>Welcome back!</h1>
            <p>Please enter your details</p>
          </div>

          <FormControl required>
            <TextInput
              id={"outlined-password-input"}
              label={"Email"}
              type={"text"}
            />

            <TextInput
              id={"outlined-password-input"}
              label={"Password"}
              type={"password"}
              autoComplete={"current-password"}
            />

            <div className="options">
              <div>
                <Checkbox defaultUnChecked size="small" />
                <label>Keep me logged in</label>
              </div>

              <a href="/forgot-password" className="forgot-password">
                Forgot password
              </a>
            </div>

            <LoginBtn children={"Login"} />
            <div className="signup-option">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </FormControl>
        </div>
      </div>

      <div className="login__image">
        <img src={LoginBg} alt="Login Background" />
      </div>
    </div>
  );
}

export default Login;
