import { useEffect, useState } from "react";
import api from "../services/api";

function Admin() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersRes = await api.get("/admin/users");
      const eventsRes = await api.get("/admin/events");
      setUsers(usersRes.data);
      setEvents(eventsRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <h2 className="font-semibold mt-4">Users</h2>
      {users.map((u) => (
        <p key={u._id}>{u.name} - {u.email}</p>
      ))}

      <h2 className="font-semibold mt-6">Events</h2>
      {events.map((e) => (
        <p key={e._id}>{e.title}</p>
      ))}
    </div>
  );
}

export default Admin;
