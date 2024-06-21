import React from 'react'
import search from "../../assets/Search icon.svg";
import './Searchbar.css'

const Searchbar = ({placeholder}) => {
  return (
    <div className="search" >
      <input type="text" placeholder={placeholder}></input>
      <button><img src={search} alt='searchImg'/></button>
    </div>
  );
}

export default Searchbar