import {useEffect, useRef} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import "./style.scss"
export default function Featured() {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  


  /* ScrollTrigger.scrollerProxy(".desc", {
    scrollTop(value) {
      if (arguments.length) {
        ".desc".scrollTop = value;
      }
      return ".desc".scrollTop;
    },
  });
  ".desc".addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({
    scroller: document.body,
  }); */
 


  useEffect(() =>{
    const element = ref.current;


    /* gsap.to(element.querySelector(".desc"), {
      backgroundPositionX: "100%",
      stagger: 1,
      scrollTrigger: {
        trigger: element.querySelector(".desc"),
        scrub: 1,
        start: "top center",
        end: "bottom top",
      },
    }); */

    gsap.to(element.querySelector(".about"), {delay:1, y:-30, opacity:1, scrollTrigger:{ trigger: element.querySelector(".about"), x: 400,
    rotation: 360
  }});



  gsap.to(element.querySelector(".desc"), { delay:1.8, y:-60, opacity:1, scrollTrigger:{ trigger: element.querySelector(".desc"),stagger:0.2
}});



/* gsap.to(".section", {
  scrollTrigger: ".section", 
  duration: 1,
  ease: "power1.inOut",
  backgroundColor: 'blue'
}); */



const tl = gsap.timeline({
  
  scrollTrigger: {
  trigger: ".container",
}

})

tl.to(".container", { backgroundColor: '#1E282D' }, 0) 




gsap.to(element.querySelector(".img1"), {opacity:1, ease: "power1.inOut",  y:-80, duration:1.2,  scrollTrigger:{ trigger: element.querySelector(".img1"),stagger:0.2
}});
  gsap.to(element.querySelector(".img2"), {opacity:1 , ease: "power1.inOut", y:-100, duration:1.2 , scrollTrigger:{ trigger: element.querySelector(".img2"),stagger:0.2
}});
gsap.to(element.querySelector(".img3"), {opacity:1 , ease: "power1.inOut", y:-150, duration:1, scrollTrigger:{ trigger: element.querySelector(".img3"),stagger:0.2
}});

gsap.to(element.querySelector(".img4"), {opacity:1, ease: "power1.inOut",  y:-270, duration:1,  scrollTrigger:{ trigger: element.querySelector(".img4"),stagger:0.2
  }});
  gsap.to(element.querySelector(".img5"), {opacity:1 , ease: "power1.inOut", y:-300,duration:1,   scrollTrigger:{ trigger: element.querySelector(".img5"),stagger:0.2
}});
gsap.to(element.querySelector(".img6"), {opacity:1 , ease: "power1.inOut", y:-350, duration:1,  scrollTrigger:{ trigger: element.querySelector(".img6"),stagger:0.2
}});


gsap.to(element.querySelector(".img7"), {opacity:1, ease: "power1.inOut",  y:-270, duration:1,   scrollTrigger:{ trigger: element.querySelector(".img7"),stagger:0.2
  }});
  gsap.to(element.querySelector(".img8"), {opacity:1 , ease: "power1.inOut", y:-300,duration:1,  scrollTrigger:{ trigger: element.querySelector(".img8"),stagger:0.2
}});
gsap.to(element.querySelector(".img9"), {opacity:1 , ease: "power1.inOut", y:-350, duration:1,  scrollTrigger:{ trigger: element.querySelector(".img9"),stagger:0.2
}});



gsap.to(element.querySelector(".img10"), {opacity:1,  ease: "power1.inOut", y:-270, duration:1,   scrollTrigger:{ trigger: element.querySelector(".img10"),stagger:0.2
  }});
  gsap.to(element.querySelector(".img11"), {opacity:1 , ease: "power1.inOut", y:-300,duration:1,   scrollTrigger:{ trigger: element.querySelector(".img11"),stagger:0.2
}});






  

}, []);







  /* useEffect(() =>{
    const element = ref.current;
  }, []);
 */

  return (
    <div ref={ref} className='featured' >
      <h2  className='about'>About Us</h2>

      <p id='headline' className="desc">Lorem ipsum amet consectetur adipisicing elit. Nesciunt illo, enim velit facere <span className='blue'>adipisci ipsam repellat</span> , odit cumque magni reprehenderit perferendis consequuntur! Quo, modi facere! Reprehenderit dolorum vitae vel deleniti illo earum quo. Eum veritatis facere hic rerum neque, dicta libero solutat <span className='blue'> ullam providen</span> doloribus necessitatibus exercitationem earum, dolorum, amet magnam pariatur molestias non eaque voluptatibus doloremque! Fuga qui deleniti pariatur.</p>


       <div className="container">

      <div className='container-items img1' >
       <img className="img" src="./img\pexels-john-zhang-2469065.jpg" alt="jjjj"  />
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
       <img className="img" src="./img\pexels-kehinde-solomon-o-ogunsanya-12512195.jpg" alt="" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>


        <div className='container-items img5'>
       <img className="img" src="./img\pexels-ksenia-chernaya-4048746.jpg" alt="jjjj" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className='container-items img6'>
       <img className="img" src="./img\pexels-alina-schelkanova-4693308.jpg" alt="" />
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


        
      <div className='container-items img9'>
       <img className="img" src="./img\hong-nguyen-J4TEzb9mb3A-unsplash.jpg" alt="jjjj"  />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className='container-items img10'>
       <img className="img" src="./img/pexels-rfstudio-4177734.jpg" alt="" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className='container-items img11'>
       <img className="img" src="./img\darko-mitev-c5t_j1zlk1Y-unsplash.jpg" alt="" />
       <p className="img-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>


      </div>



      <div className="brand">ALPAHSHINO LEPASELO</div>
    


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