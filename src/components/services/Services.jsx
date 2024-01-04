import "./services.scss";
import { motion } from "framer-motion";
const variant = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="servicess"
      variants={variant}
      initial="initial"
      whileInView="animate"
      //   ref={ref}
      //   animate={isInView && "animate"}
    >
      <motion.div className="textcontainer" variants={variant}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titlecontainer" variants={variant}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            {/* <b>Unique</b>Ideas */}
            <motion.b whileHover={{ color: "orange" }}>Uniqe</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For your</motion.b>{" "}
            Business
          </h1>
          <button>What i do?</button>
        </div>
      </motion.div>

      <motion.div className="listcontainer" variants={variant}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Global Reach</h2>
          <p>
            A website enables businesses to reach a global audience 24/7,
            enhancing visibility and attracting potential customers from
            anywhere with internet access.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Credibility & Professionalism</h2>
          <p>
            In the digital era, consumers frequently research products and
            businesses online. A professionally designed and well-maintained
            website, featuring relevant content, a user-friendly interface, and
            secure payment options, fosters confidence, builds trust, and
            establishes the brands credibility.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Marketing</h2>
          <p>
            A website acts as the central hub for online marketing, enabling
            product showcases, success stories, and audience engagement via
            social media and email. Implementing SEO strategies enhances search
            engine visibility, attracting users actively seeking related
            products or services and potentially driving organic traffic and
            conversions.
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
