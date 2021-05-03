import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";


import Homes from "../screens/Homes";

import { getAllHomes, postHome } from "../services/home";
import {
  deleteBooking,
  getAllUsersBookings,
  postBooking,
  putBooking,
} from "../services/bookings";
// import Bookings from '../screens/BookingConfirmation';
import BookingConfirmation from "../screens/BookingConfirmation";
import EditBooking from "../screens/EditBooking";
import HomesCreate from "../screens/HomesCreate";
import HomeDetail from "../screens/HomeDetail";
import MainHomepage from "../screens/MainHomepage";

export default function MainContainer(props) {
  const [homes, setHomes] = useState([]);
  const [bookings, setBookings] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchHomes = async () => {
      const homeData = await getAllHomes();
      setHomes(homeData);
    };
    fetchHomes();
  }, []);

  const fetchBookings = async () => {
    const bookingData = await getAllUsersBookings();
    setBookings(bookingData);
  };
  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCreate = async (formData) => {
    const homeData = await postHome(formData);
    setHomes((prevState) => [...prevState, formData]);
    history.push("/homes");
  };


  const handleCreateBooking = async (formData) => {
    const bookingData = await postBooking(formData);
    setHomes((prevState) => [...prevState, formData]);
    fetchBookings()
    // history.push("/bookingconfirmation");
  };








  const handleEdit = async (id, formData) => {
    const bookingData = await putBooking(id, formData);
    setBookings((prevState) =>
      prevState.map((bookings) => {
        return bookings.id === Number(id) ? bookingData : bookings;
      })
      );
      fetchBookings()
    history.push("/bookingconfirmation");
  };
  const handleDelete = async (id) => {
    await deleteBooking(id);
    setHomes((prevState) => prevState.filter((bookings) => bookings.id !== id));
    fetchBookings()
    history.push("/bookingconfirmation");
  };

  return (
    <Switch>
      <Route path="/bookingconfirmation">
        <BookingConfirmation bookings={bookings} />
      </Route>
      <Route path="/booking/:id/edit">
        <EditBooking
          bookings={bookings}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path="/createhomes">
        <HomesCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/homes/:id">
        <HomeDetail homes={homes} handleCreateBooking={handleCreateBooking}/>
      </Route>
      <Route path="/homes">
        <Homes homes={homes} />
      </Route>
      <Route path='/'>
        <MainHomepage/>
      </Route>
    </Switch>
  );
}
