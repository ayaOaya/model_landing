import React from 'react'
import { gsap } from "gsap";
import "./style.scss"

export default function Footer() {
  return (
    <>

<div className="footer">
  <div className="links">
    <div className="container">

      {/* add a grid with 3 columns each colum has 5 elements */}
      <ul className='links-items'>
        <li>Original</li>
        <li>About</li>
        <li>Helpful links</li>
        <li>CONTACT Us</li>
        <li>Fashion</li>
        <li>Resources</li>
        <li>Shopping</li>
        <li>List items</li>
        <li>Colors</li>
        <li>Heels</li>
        <li>Shoes</li>
        <li>Bags</li>
        <li>Make-up</li>
        <li>Linked-in</li>
        <li>Other</li>
      </ul>
    </div>
    <h3>Copyright @fashion</h3>
  </div>
</div>
    </>
  )
}
