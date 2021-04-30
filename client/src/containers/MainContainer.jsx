import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Homes from '../screens/Homes'

import {getAllHomes} from "../services/home"
import {getAllUsersBookings, putBooking} from "../services/bookings"
// import Bookings from '../screens/BookingConfirmation';
import BookingConfirmation from '../screens/BookingConfirmation';
import EditBooking from '../screens/EditBooking';
import HomesCreate from '../screens/HomesCreate';

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

  handleCreate = async (formData) => {
    const HomeData = await postBooking(formData)
    set
  }
  const handleEdit = async (id, formData) => {
    const bookingData = await putBooking(id, formData)
    setBookings(prevState => prevState.map(bookings => {
      return bookings.id === Number(id)? bookingData : bookings 
    }))
    history.push('/bookingconfirmation')
}
  return (
    
      <Switch>
      <Route path='/bookingconfirmation'>
        <BookingConfirmation bookings={bookings}/>
      </Route>
      <Route path= '/booking/:id/edit'>
        <EditBooking bookings={bookings} handleEdit={handleEdit}/>
      </Route>
      <Route path='/createhomes'>
      <HomesCreate/>
        </Route>
      <Route path='/homes'>
        <Homes homes={homes}/>
        </Route>
      </Switch>
    
  )
}
