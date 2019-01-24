import React from "react";
import {
  Button,
  Input,
  Paper,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

class Login extends React.Component {
  state = {
    password: "",
    showPassword: false,
    username: ""
  };

  handleChange = prop => event => {
    let value = event.target.value;
    if (value.includes(" ")) {
      value = prop === "username" ? value.replace(/ /g, "") : value;
    }
    this.setState({ [prop]: value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {
    const { username, showPassword, password } = this.state;

    return (
      <Paper
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: 6
        }}
      >
        <FormControl fullWidth className="form-control">
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={this.handleChange("username")}
          />
        </FormControl>
        <FormControl fullWidth className="form-control">
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={this.handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" color="primary" className="">
          Login
        </Button>
      </Paper>
    );
  }
}

export default Login;
