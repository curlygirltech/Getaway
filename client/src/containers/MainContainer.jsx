import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { async } from 'regenerator-runtime';

import {getAllHomes} from "../services/home"
import {getAllBookings} from "../services/bookings"

export default function MainContainer(props) {
  const [homes, setHomes] = useState([]);
  const [bookings, setBookings] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchHomes = async () => {
      const HomeData = await getAllHomes()
      setHomes(HomeData)
    }
    fetchHomes()
  }, [])

  useEffect(() => {
    const fetchBookings = async () => {
      const bookingData = await getAllBookings()
      setBookings(bookingData)
    }
    fetchBookings()
  }, [])

  // handleCreate = async (formData) => {
  //   const bookingData = await postBooking(formData)
  //   set
  // }

  return (
    
      <Switch>
        <Route path= '/bookings'>
        </Route>
      <Route path='/homes'>
        <h3>homes</h3>
        </Route>
        <Route path='/users'>
        </Route>
      </Switch>
    
  )
}
