import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
export default function HomesCreate(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    title:"",
    description: "",
    img_url: "",
    num_beds: "",
    num_baths: "",
    rate: ""
  });
  const { start_date, end_date } = formData;
  const { bookings, handleCreate } = props;

  return <div></div>;
}
