import React from "react";

function Calendar() {
  return (
    <section>
      <h2>Book a Class</h2>
      <iframe src="https://calendar.google.com/calendar/embed?src=youremail%40gmail.com" style={{border: "0"}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
    </section>
  );
}

export default Calendar;
