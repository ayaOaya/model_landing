import React from 'react'
import { gsap } from "gsap";
import "./style.scss"
export default function Featured() {
  return (
    <div className='featured'>
      <h2>About Us</h2>
      <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore numquam optio quod dolores magni, voluptas itaque quia sequi nesciunt modi porro doloribus laudantium minus hic, voluptate ratione, quae vel possimus facilis rerum inventore provident. Omnis fugit nisi ea illo iste Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt illo, enim velit facere <span className='blue'>adipisci ipsam repellat</span> , odit cumque magni reprehenderit perferendis consequuntur! Quo, modi facere! Reprehenderit dolorum vitae vel deleniti illo earum quo. Eum veritatis facere hic rerum neque, dicta libero solutat <span className='blue'> ullam providen</span> doloribus necessitatibus exercitationem earum, dolorum, amet magnam pariatur molestias non eaque voluptatibus doloremque! Fuga qui deleniti pariatur.</p>

      


       <div className="wrapper">

      <div className='container-items img1'>
       <img className="img" src="./img\pexels-john-zhang-2469065.jpg" alt="jjjj" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className='container-items img2'>
       <img className="img" src="./img\pexels-zhuravleva-anastasia-9985741.jpg" alt="" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className='container-items img3'>
       <img className="img" src="./img\pexels-matheus-natan-5689042.jpg" alt="" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>


        <div className='container-items img4'>
       <img className="img" src="./img\pexels-tom-chang-2462217.jpg" alt="" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>


        <div className='container-items img5'>
       <img className="img" src="./img\pexels-john-zhang-2469065.jpg" alt="jjjj" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className='container-items img6'>
       <img className="img" src="./img\pexels-zhuravleva-anastasia-9985741.jpg" alt="" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className='container-items img7'>
       <img className="img" src="./img\pexels-matheus-natan-5689042.jpg" alt="" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>


        <div className='container-items img8'>
       <img className="img" src="./img\pexels-tom-chang-2462217.jpg" alt="" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>


      </div>
      
    </div>

     
  )
}

/* 
What i still have to add :
text animation 
navbar animation
hover cursor when it reaches the About page
paragraph animation
gallery scroll images go up animation
maybe text go behind an image animation as scroll down
add the loading 
add the loading animation
maker name before footer
maker name animation
edit the footer
add the costue cursor
*/