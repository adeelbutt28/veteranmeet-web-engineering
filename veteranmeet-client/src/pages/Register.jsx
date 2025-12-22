import { useState } from "react";
import api from "../services/api";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        profession: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/register", formData);
            alert(res.data.message);
        } catch (error) {
            alert(error.response?.data?.message || "Registration failed");
        }
    };


    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                    Veteran Registration
                </h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full mb-4 p-2 border rounded"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full mb-4 p-2 border rounded"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-4 p-2 border rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="profession"
                    placeholder="Profession"
                    className="w-full mb-6 p-2 border rounded"
                    onChange={handleChange}
                />

                <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
