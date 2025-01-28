import React from 'react';
import { motion} from 'framer-motion';
import {AiFillIeCircle} from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";

const Services = () => {

    const animations = {
        whileInView:{
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            opacity:0,
            x:"-100%",
        },
        twoandThree:{
            opacity:0,
            y:"-100%",
        },
        four:{
            opacity:0,
            x:"100%",
        }
    };

  return (
    <div id='services'>
        <h2>Services</h2>
        <section>
            <motion.div className='serviceBox1' whileInView={animations.whileInView} initial={animations.one}>
                <h3>1.5+</h3>
                <p>Years Experience</p>
            </motion.div>
            <motion.div className='serviceBox2' whileInView={animations.whileInView} initial={animations.twoandThree}>
                <AiFillIeCircle/>
                <span>Frontend Web Development</span>
            </motion.div>
            <motion.div className='serviceBox3' whileInView={animations.whileInView} initial={animations.twoandThree}
            transition={{
                delay:0.2,
            }}>
                <FaCamera/>
                <span>Photographer</span>
            </motion.div>
            <motion.div className='serviceBox4' whileInView={animations.whileInView} initial={animations.four}>
                <MdOndemandVideo/>
                <span>Video Editor</span>
            </motion.div>
        </section>
        </div>

  )
}

export default Services