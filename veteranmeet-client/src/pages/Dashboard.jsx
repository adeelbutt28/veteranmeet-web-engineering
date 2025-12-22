import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
                Dashboard
            </h1>

            <p className="text-gray-600 mb-6">
                Welcome to VeteranMeet. You are logged in.
            </p>

            <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
            >
                Logout
            </button>
        </div>
    );
}

export default Dashboard;
