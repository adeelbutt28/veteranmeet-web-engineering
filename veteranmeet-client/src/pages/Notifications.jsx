import { useEffect, useState } from "react";
import api from "../services/api";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await api.get("/notifications");
      setNotifications(res.data);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      {notifications.map((n) => (
        <div
          key={n._id}
          className="bg-white p-3 mb-3 rounded shadow"
        >
          {n.message}
        </div>
      ))}
    </div>
  );
}

export default Notifications;
