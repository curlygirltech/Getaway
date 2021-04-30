import { useState } from "react";

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
    title: "",
    description: "",
    rate: "",
    img_url: "",
    num_beds: "",
    num_baths: "",
  });
  const {
  title,
  description,
  rate,
  img_url,
  num_beds,
  num_baths
  } = formData;

  const {handleCreate} = props

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div>
        <h3>Host a Home</h3>
      </div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData)
        }}
      >
        <TextField
          required
          id="outlined-start-date"
          label="Title"
          name="title"
          value={title}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-start-date"
          label="Pictures"
          name="img_url"
          value={img_url}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-start-date"
          label="Description"
          name="description"
          value={description}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number of bedrooms"
          type="number"
          name="num_beds"
          value={num_beds}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number of bathrooms"
          type="number"
          name="num_baths"
          value={num_baths}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Rate"
          type="number"
          name="rate"
          value={rate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <button>Submit</button>
      </form>
    </>
  );
}
