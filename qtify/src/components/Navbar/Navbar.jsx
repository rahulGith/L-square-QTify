import React from 'react'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" className='logo' width={67} height={34}/>
        <Searchbar placeholder={"Search a song of your choice"}/>
        <Button text={"Give Feedback"}/>
    </div>
  )
}

export default Navbar