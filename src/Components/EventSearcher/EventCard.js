import React from "react";
import { UnixToDate, UnixToTime } from "./Functions/HelperFunctions";

const EventCard = ({ event }) => {
  const date = UnixToDate(event.start_time);
  const startTime = UnixToTime(event.start_time);
  const endTime = UnixToTime(event.end_time);

  return (
    <div className="card">
      <div>{event.name}</div>
      <div>{event.event_type}</div>
      <div>{event.permission}</div>
      <div>
        {date} {startTime} - {endTime}
      </div>
    </div>
  );
};

export default EventCard;
