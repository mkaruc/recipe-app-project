import { Link, NavLink } from 'react-router-dom';
import NavbarStyle from "./style";

function Navbar() {
  return (
  <NavbarStyle>
    <img src="" alt="" />
    <NavLink style={({isActive})=> ({textDecoration: isActive && 'underline'})} to="about">About</NavLink>
    <a href="https://github.com/mkaruc">Github</a>
    <NavLink style={({isActive})=> ({textDecoration: isActive && 'underline'})} to="../pages/login/Login">logout</NavLink>
    </NavbarStyle>
  )
}

export default Navbar