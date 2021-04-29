import React from 'react'

export default function Bookings(props) {
  const { bookings } = props
  return (
    <div>
      <h3>Here are your Bookings</h3>
      {bookings.map(booking => (
        <p key={booking.id}>{booking.user}</p>
      ))}
    </div>
  )
}
