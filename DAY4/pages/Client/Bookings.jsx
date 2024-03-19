import React, { useState } from 'react';
import "../../assets/css/Bookings.css";
function Bookings() {
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [venue, setVenue] = useState('');
    const [diningDetails, setDiningDetails] = useState('');
    const [attendees, setAttendees] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to server or perform any necessary action
        console.log({
            eventName,
            date,
            time,
            venue,
            diningDetails,
            attendees
        });
        // Reset form fields after submission
        setEventName('');
        setDate('');
        setTime('');
        setVenue('');
        setDiningDetails('');
        setAttendees('');
    };

    return (
        <div>
            <h2>Book the  Event</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="eventName">Event Name:</label><br />
                <input type="text" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} required /><br /><br />

                <label htmlFor="date">Date of Event:</label><br />
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required /><br /><br />

                <label htmlFor="time">Time:</label><br />
                <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required /><br /><br />

                <label htmlFor="venue">Venue Details:</label><br />
                <textarea id="venue" value={venue} onChange={(e) => setVenue(e.target.value)} rows="4" cols="50" required /><br /><br />

                <label htmlFor="diningDetails">Dining Details:</label><br />
                <textarea id="diningDetails" value={diningDetails} onChange={(e) => setDiningDetails(e.target.value)} rows="4" cols="50" required /><br /><br />

                <label htmlFor="attendees">Number of Attendees:</label><br />
                <input type="number" id="attendees" value={attendees} onChange={(e) => setAttendees(e.target.value)} min="1" required /><br /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Bookings;