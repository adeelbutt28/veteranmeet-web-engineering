import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-blue-900 text-white">
            <h1 className="text-xl font-bold">VeteranMeet</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:text-yellow-400">Home</Link>
                <Link to="/login" className="hover:text-yellow-400">Login</Link>
                <Link to="/register" className="hover:text-yellow-400">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
