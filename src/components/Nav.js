import React from "react"
import { useState } from "react"
import "./Nav.scss"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"


function Nav() {
  const [navBlack, setNavBlack] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
  }

  useState(() => {
    document.addEventListener("scroll", transitionNav)
  })

  const handleClick = () => {
    console.log(toggleMenu)
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
  }

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparent"
      } ${toggleMenu && "show"}`}
    >
      <button className="nav__burger" onClick={handleClick}>
        <MenuIcon />
      </button>
      <img src="./images/logo.svg" className="nav__logo" alt="MOVIEFINDER" />
      
      <div className="nav__actions">
        <a href="/" className="nav__action">
          <SearchIcon />
        </a>
       
      </div>
    </div>
  )
}

export default Nav
