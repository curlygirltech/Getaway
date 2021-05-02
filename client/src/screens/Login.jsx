import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../screens/Css Screens/login.css'



import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
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
    <div className="login-background">
<div>
    <form
    
      className="login-form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
      
    >
      <TextField
        required
        className="outlined-required"
        label="Username"
        name="username"
        value={username}
        onChange={handleChange}
        variant="outlined"
        
      />

      <TextField
        required
        className="outlined-required"
        label="Password"
        type="password"
        autoComplete="current-password"
        name="password"
        value={password}
        onChange={handleChange}
        variant="outlined"
      />
      <Link to="/register">Create an Account</Link>
      <div className="login-button">
      <button>Submit</button>
      </div>
      </form>
      </div>
    </div>
  );
}
