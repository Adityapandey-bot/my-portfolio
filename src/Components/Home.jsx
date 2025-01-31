import React, { useRef } from 'react';
import {animate, motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";
// import me from "../Assets/em.png";  
 

const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);
    const animateClientsCount = ()=> {
        animate(0, 10,{
            duration:1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        })

    };
    const animateprojectsCount = ()=> {
        animate(0, 20,{
            duration:1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        })

    };

    const animations = {
        h1:{
            initial:{
                x:"-100%",
                opacity: 0,
            },
            whileInView:{
                x: 0,
                opacity: 1,
            }
        },
        button :{
            initial:{
                y:"-100%",
                opacity: 0,
            },
            whileInView:{
                y: 0,
                opacity: 1,
            }
        }
    }
  return (
    <div id='home'>
    <section>
        <div>
    <motion.h1 {...animations.h1} >
        Hi, I Am <br/> Aditya Pandey
    </motion.h1>

    <Typewriter options={{
        strings:["A Developer", "A Designer" , "A Creator"],
        autoStart: true,
        loop: true,
        cursor:"",
        wrapperClassName:"typewriterpara"
    }} />
    <div>
        <a href='mailto:akpandey9652@gmail.com'>Hire Me</a>
        <a href="#work">Projects <BsArrowUpRight/> </a>
    </div>

    <article>
        <p>+<motion.span whileInView={animateClientsCount} ref={clientCount}></motion.span></p>
        <span>Clients Worldwide</span>
    </article>

        <aside>

        <article>
        <p>+<motion.span ref={projectCount} whileInView={animateprojectsCount}></motion.span></p>
        <span>Projects Done</span>
        </article>

        <article data-special >
        <p>Contact</p>
        <span>akpandey9652@gmail.com</span>
        </article>

        </aside>
        </div>
    </section>


    <section>
        <img 
                  src={"https://raw.githubusercontent.com/Adityapandey-bot/image-hosting/refs/heads/main/IMG_1811.png"}

         alt='Adiya' />
    </section>
    <BsChevronDown/>

    </div>
  )
}

export default Home