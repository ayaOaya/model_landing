import React from 'react'
import "./style.scss"

export default function Navbar() {
  return (

    /* The image is gonna use the sp  */
     /* Add a loader also  */
   <>
    <div className='bg'>   
    <div className="img">
    <div className='navbar'>
      <div className="title">AYASHOP</div>
      <div className="links">
        <ul>
          <li><a href="/">дом</a></li>
          <li><a href="/">странице</a></li>
          <li><a href="/">продукт</a></li>
          <li><a href="/">история</a></li>
          <li><a href="/">новый</a></li>
          <li className='special'><a href="">контакт</a></li>
          <li className='icon'><a href="">тележка</a></li>
        </ul>
      </div>
    </div>
    <h1 className='header-title'>люди модой уникальны</h1>
    <h1 className='title'>начни быть уникальным сегодня</h1></div> 
    </div>
    </>
  )
}
