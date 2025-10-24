import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-blue-300 flex items-center px-6 justify-between">
        <h1 className="font-bold text-2xl">
            <Link to="/">UFit</Link>
        </h1>
        <div className="flex items-center gap-6">
            <Link to="/home">HOME</Link>
            <Link to="/workouts">WORKOUTS</Link>
            <Link to="/community">COMMUNITY</Link>
            <Link to="/Membership">MEMBERSHIP</Link>
            <Link to="/login">SIGN IN</Link>
            <Link to="/create">Get Started</Link>
        </div>

    </nav>
  );
};

export default Navbar;
