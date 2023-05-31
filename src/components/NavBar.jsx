import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/personajes">Personajes</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </nav>
  )
}
export default NavBar