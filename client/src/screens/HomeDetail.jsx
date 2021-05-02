import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../screens/Css Screens/homedetails.css";

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
            console.log(formData);
            const start_date = new Date(formData.start_date);
            const end_date = new Date(formData.end_date);
            const diff = end_date.getTime() - start_date.getTime();
            const days = Math.ceil(diff / (1000 * 3600 * 24));
            const price = days * home.rate;
            handleCreateBooking ({...formData, home_id: id, price: price}) ;
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
        </form>
      </div>
    </div>
  );
}
