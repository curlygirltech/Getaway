import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { async } from 'regenerator-runtime';
import Homes from '../screens/Homes'

import {getAllHomes} from "../services/home"
import {getAllUsersBookings} from "../services/bookings"
// import Bookings from '../screens/BookingConfirmation';
import BookingConfirmation from '../screens/BookingConfirmation';
import EditBooking from '../screens/EditBooking';

export default function MainContainer(props) {
  const [homes, setHomes] = useState([]);
  const [bookings, setBookings] = useState([]);
  const history = useHistory();
  const { currentUser } = props;
  console.log(currentUser && currentUser)

  useEffect(() => {
    const fetchHomes = async () => {
      const HomeData = await getAllHomes()
      setHomes(HomeData)
    }
    fetchHomes()
  }, [])

  useEffect(() => {
    const fetchBookings = async () => {
      const bookingData = await getAllUsersBookings()
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
      <Route path='/bookingconfirmation'>
        <BookingConfirmation bookings={bookings}/>
      </Route>
      <Route path= '/booking/:id/edit'>
        <EditBooking bookings={bookings}/> 
      </Route>
      <Route path='/homes'>
        <Homes homes={homes}/>
        </Route>
        <Route path='/users'>
        </Route>
      </Switch>
    
  )
}
