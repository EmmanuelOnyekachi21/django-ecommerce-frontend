import { Link } from 'react-router-dom'

const NavBarLink = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a href="#!" className="nav-link active fw-semibold">Home</a>
        </li>
        <li className="nav-item">
            <Link to='/profile' className='nav-link fw-semibold' href="#!">Shop</Link>
        </li>
        <li className="nav-item">
            <a href="#!" className="nav-link fw-semibold">About</a>
        </li>
        <li className="nav-item">
            <a href="#!" className="nav-link fw-semibold">Contact</a>
        </li>
    </ul>
  )
}

export default NavBarLink