import navstyle from './Navbar.module.css'
function Navbar() {
    return (
        <ul className={`nav justify-content-evenly ${navstyle.nav}`}>
  <li className="nav-item">
    <a className={`nav-link ${navstyle.link}`} href="#">ABOUT </a>
  </li>
  <li className="nav-item">
    <a className={`nav-link ${navstyle.link}`} href="#">EXPLORE</a>
  </li>
  <li className="nav-item">
    <a className={`nav-link ${navstyle.link}`} href="#"><i class="fa-solid fa-location-dot"></i></a>
  </li>
  <li className="nav-item">
    <a className={`nav-link ${navstyle.link}`} href="#">JOURNAL</a>
  </li>
  <li className="nav-item">
    <a className={`nav-link ${navstyle.link}`} href="#"><i class="fa-solid fa-magnifying-glass"></i>SEARCH</a>
  </li>
</ul>
    )
}

export default Navbar
