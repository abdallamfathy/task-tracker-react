import React from 'react'
import Button from "./Button"


const Header = () => {
    const onClick = () =>{
        console.log("clicked");
      }
    return (
    <header>
        <h2>Task Tracker</h2>
    </header>
  )
}

export default Header