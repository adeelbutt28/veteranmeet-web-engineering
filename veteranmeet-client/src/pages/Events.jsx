import { useEffect, useState } from "react";
import api from "../services/api";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get("/events");
        setEvents(res.data);
      } catch {
        console.error("Failed to load events");
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Community Events</h1>

      {events.map((event) => (
        <div
          key={event._id}
          className="bg-white p-4 mb-4 rounded shadow"
        >
          <h2 className="text-xl font-semibold">{event.title}</h2>
          <p className="text-gray-600">{event.description}</p>
          <p className="text-sm text-blue-700">
            Stars: {event.stars}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Events;
