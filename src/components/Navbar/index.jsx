import {useEffect} from 'react'
import { gsap } from "gsap";
import "./style.scss"

export default function Navbar() {
useEffect(() =>{
  let tl = gsap.timeline();
  tl.to(".navbar", {delay:1, y:20, opacity:1 })
  tl.to(".header-title", {delay:1.1, y:-30, opacity:1 })

 
})


/* 
useEffect(() =>{
gsap.to(".navbar", {delay:1.2, y:20, opacity:1 })
gsap.to(".header-title", {delay:1.5, y:-30, opacity:1 })

}) */



  /* 
  useEffect(() =>{
 gsap.to(".sp",  {opacity:1, x:-3000, duration:.1, delay:2} 
 gsap.to(".tit", {opacity:1, duration:.9})
gsap.to(".navbar", {delay:1.2, y:30, opacity:1 })
gsap.to(".fr", {})

})
 */
  return (
   <>
    <div className='bg'>   
    <div className="img">
    <div className='navbar'>
      <div className="title">KENAT</div>
      <div className="links">
        <ul>
          <li><a href="/">дом</a></li>
          <li><a href="/">странице</a></li>
          <li><a href="/">продукт</a></li>
          <li><a href="/">история</a></li>
          <li><a href="/">новый</a></li>
          <li className='special'><a className='special' href="">контакт</a></li>
          <li className='icon'><a href="">тележка</a></li>
        </ul>
      </div>
    </div>
    <h1 className='header-title'> <span className='fr'>модой</span>  <span className='sc'>уникальны</span></h1>
    <h1 className='title'></h1></div> 
    </div>
    </>
  )
}
