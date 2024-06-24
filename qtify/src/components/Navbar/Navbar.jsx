import React from 'react'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'
import Logo from '../Logo/Logo'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Logo/>
        <Searchbar placeholder={"Search a song of your choice"}/>
        <Button text={"Give Feedback"}/>
    </div>
  )
}

export default Navbar