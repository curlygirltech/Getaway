import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../screens/Css Screens/login.css'



import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <TextField
        required
        id="outlined-required"
        label="Username"
        name="username"
        value={username}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        name="password"
        value={password}
        onChange={handleChange}
        variant="outlined"
      />
      <Link to="/register">Register</Link>
      <button>Submit</button>
    </form>
  );
}
