import React from "react";
import {Link} from 'react-router-dom'

export default function BookingConfirmation(props) {
  const { bookings } = props;
  console.log(bookings);
  return (
    <div>
      <h3>Here are your Bookings</h3>
      {bookings.map((booking) => (
        <React.Fragment key={booking.id}>
        <p>
          {booking.start_date}-{booking.end_date}
          {booking.home.description}
          {booking.home.img_url}
          {`Your total is $${booking.price}`}
        </p>
          <h3>Change of Plans?</h3>
          <Link to={`/booking/${booking.id}/edit`}>
          <button >Edit Booking</button>
          </Link>
        </React.Fragment>
        
      ))}
    </div>
  );
}
