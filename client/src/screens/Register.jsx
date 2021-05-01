import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../screens/Css Screens/register.css'


import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Register(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    email:'',
    password: "",
  });

  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="register-form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
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
        className="outlined-required"
        label="Email"
        name="email"
        value={email}
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
      
      <button>Submit</button>
    </form>
  );
}
