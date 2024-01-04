import "./hero.scss"
import { motion } from "framer-motion";

const textvariants={
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
};

const slidevariants={
    initial:{
        x:0
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    }
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textcontainer" variants={textvariants} initial='initial'  animate='animate' >
                    <motion.h2 variants={textvariants}>MAYAR ELSISY</motion.h2>
                    <motion.h1 variants={textvariants}>FULLSTACK WEB DEVELOPER</motion.h1>
                    <motion.div className="buttons" variants={textvariants}>
                        <motion.button variants={textvariants}>See The Latest Works</motion.button>
                        <motion.button variants={textvariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.div variants={textvariants}>
                        <motion.img animate='scrollButton' src="./scroll.png" variants={textvariants} />
                    </motion.div>

                </motion.div>
                <motion.div className="slidercontainer" variants={slidevariants} initial='initial'  animate='animate'>
                   CREATIVE FULLSTACK WEB DEVELOPER

                </motion.div>
                <motion.div className="imagecontainer" variants={textvariants}>
                    <img src="./test.png" alt="" />
                </motion.div>

            </div>

        </div>
    )
}

export default Hero