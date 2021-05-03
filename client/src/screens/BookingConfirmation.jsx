import React from "react";
import { Link } from "react-router-dom";
import "../screens/Css Screens/bookingconfirmation.css";

export default function BookingConfirmation(props) {
  const { bookings } = props;
  console.log(bookings);
  return (
    <div>
      <div className= "bookings-heading"><h3>Here are your Bookings</h3>
      </div>
      <div className="booking-card">
        {bookings.map((booking) => (
          <React.Fragment key={booking.id}>
            <div className="title">{booking.home?.title }</div>
            <div className= "date">{booking.start_date} to {booking.end_date}</div>
            <div className="price">{`Your total is $${booking.price}`}</div>
            <img src={booking.home?.img_url} />
            <div className="description">{booking.home?.description}</div>
            <div classname="edit"><h3>Change of Plans?</h3></div>
            <div className="edit-button">
            <Link to={`/booking/${booking.id}/edit`}>
              <button>Edit Booking</button>
            </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
