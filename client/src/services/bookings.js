import React from 'react'
import axios from 'axios'
import api from './api-helper'


//index
export const getAllBookings = async () => {
  const resp = await api.get('/bookings')
  return resp.data
}

//show
export const getOneBooking = async (id) => {
  const resp = await api.get(`/bookings/${id}`);
  return resp.data

}
//create
export const postBooking = async (bookingData) => {
  const resp = await api.post('/bookings', { booking: bookingData })
  return resp.data
}
//update
export const putBooking = async (id, bookingData) => {
  const resp = await api.put(`/bookings/${id}`, { booking: bookingData })
  return resp.data
}
//delete
export const deleteBooking = async (id) => {
  const resp = await api.delete(`/bookings/${id}`)
  return resp
}

  