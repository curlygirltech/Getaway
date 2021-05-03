import React from 'react'
import { useEffect, useState, } from "react";
import { useParams, Link } from "react-router-dom";
import "../screens/Css Screens/homedetails.css";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
// }));

export default function HomeDetail(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
  });
  const [home, setHome] = useState(null);
  const { start_date, end_date } = formData;
  const { homes, handleCreateBooking } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchOneHome = () => {
      const singleHome = homes.find((eachHome) => eachHome.id === Number(id));
      setHome(singleHome);
    };
    if (homes.length) {
      fetchOneHome();
    }
  }, [homes, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };




  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };







  return (
    <div classname="home-detail">
      <div className="home-detail-card">
        <div className="title">{home?.title}</div>
        <p>{`rate $${home?.rate}`}</p>
        <img className="home-images" src={home?.img_url} />
        <div classname="home-detail-description">
          <p>{home?.description}</p>
        </div>
        <form
          className="booking-form"
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleOpen()
            console.log(formData);
            const start_date = new Date(formData.start_date);
            const end_date = new Date(formData.end_date);
            const diff = end_date.getTime() - start_date.getTime();
            const days = Math.ceil(diff / (1000 * 3600 * 24));
            const price = days * home.rate;
            handleCreateBooking({ ...formData, home_id: id, price: price });
          }}
        >
          <TextField
            required
            type="date"
            className="input"
            // label="start_date"
            name="start_date"
            value={start_date}
            onChange={handleChange}
            variant="outlined"
          />

          <TextField
            required
            type="date"
            className="input"
            // label="end_date"
            name="end_date"
            value={end_date}
            onChange={handleChange}
            variant="outlined"
          />
          <div className="book-button">
            <button>Book</button>
          </div>
          <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Your booking is confirmed</h2>
            <p id="transition-modal-description">Edit your booking in your account</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
        </form>
      </div>
    </div>
  );
}
