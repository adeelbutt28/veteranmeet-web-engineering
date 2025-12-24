import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get("/users/me");
                setUser(res.data);
            } catch (error) {
                console.error("Failed to load profile");
            }
        };

        fetchProfile();
    }, []);

    if (!user) return <p className="p-8">Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
                Veteran Profile
            </h1>

            <div className="bg-white p-6 rounded shadow-md max-w-md">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Profession:</strong> {user.profession}</p>
                <p><strong>Stars:</strong> {user.stars}</p>
            </div>
        </div>
    );
}

export default Profile;
