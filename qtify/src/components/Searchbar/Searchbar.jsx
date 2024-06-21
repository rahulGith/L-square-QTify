import React from 'react'

const Searchbar = ({placeholder}) => {
  return (
    <div className="search" >
      <input type="text" placeholder={placeholder}></input>
    </div>
  );
}

export default Searchbar