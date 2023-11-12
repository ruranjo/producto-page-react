
import './Header.scss'
import card from '../../../assets/images/icon-cart.svg'
import avatar from  '../../../assets/images/image-avatar.png'
import logo from  '../../../assets/images/logo.svg'
import { useState } from 'react'
const Header = () => {
  const [sidebarMenu, setSidebarMeny] = useState(false);

  const handleChangeToggle = () => {
    setSidebarMeny(!sidebarMenu);
  }

  return (
    <div className={ `header-container ${sidebarMenu ? "black" : ""}`}>
      <div className='header'>

        <nav className={sidebarMenu ? 'nav-menu active' : 'nav-menu'}>
            
          <ul className='nav-menu-items'>
            <div className='navbar-toggle' onClick={handleChangeToggle}>
              ✖
            </div>
            <nav className="nav-menu-items">
              <ul className='options'>
                <li className='nav-text' ><a href="#">Collections</a></li>
                <li className='nav-text' ><a href="#">Men</a></li>
                <li className='nav-text' ><a href="#">Women</a></li>
                <li className='nav-text' ><a href="#">About</a></li>
                <li className='nav-text' ><a href="#">Contact</a></li>
              </ul>
            </nav>
            
          </ul>
        </nav>

        <div className= 'sidebar-menu'>
          <div className={ `sidebar-menu-content ${sidebarMenu ? "active" : "desactive"}`}>
            
          </div>
        </div>

        <div className='left'>
            <span onClick={handleChangeToggle} className="icono-movil-bar">≡</span>
            <img className='logo' src={logo} alt="" />
          <nav className="navbar">
            <ul className='options'>
              <li className='option' ><a href="#">Collections</a></li>
              <li className='option' ><a href="#">Men</a></li>
              <li className='option' ><a href="#">Women</a></li>
              <li className='option' ><a href="#">About</a></li>
              <li className='option' ><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="right">
          <img className='card' src={card} alt="" />
          <img className='avatar' src={avatar} alt="" />
        </div>
        
      </div>

    </div>
  )
}

export default Header