import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/Maiwand">Maiwand </NavLink>
      <NavLink to="/Marco">Marco </NavLink>
      <NavLink to="/Reshma">Reshma </NavLink>
    </div>
  );
};

export default Navbar;
