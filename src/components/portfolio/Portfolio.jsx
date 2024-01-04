import { useRef } from "react";
import PropTypes from "prop-types";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Hospital Guide",
    image: "./medecine.png",
    desc: "it's a dynamic view into the heart of a real hospital, offering vital information for efficient management and patient care. Built on the MVC framework, this project provides administrators with real-time data on care units, departments, bed occupancy, medical staff, and exclusive news.",
  },
  {
    id: 2,
    title: "HospitalDashboard",
    image: "./dashboard.png",
    desc: "Hospital Dashboard is here to deliver just that. Built on the .NET 4.8 framework, this project employs the MVC architecture to provide a scalable, modular, and highly maintainable solution for hospital administrators and super administrators.",
  },
  {
    id: 3,
    title: "Aiding Squad",
    image: "./Emergency.png",
    desc: `Medical project assist hospital owners(admins) and staff in
    organizing and managing the emergency movement in the best
    way that leads to amazing results such as:
    - Eliminate crowding in the emergency department.
    - Ease of communication between doctors through the mobile
    application.
    - Create records that contain the data of each patient
    completely.
    - Creating important statistics and reports that help hospital
    owners in making decisions.
    - The ability to predict the daily turnout of the number of
    patients.`,
  },
  {
    id: 4,
    title: "DevFolio ",
    image:"./portfolio.png",
    desc: "source code for a simple portfolio website built using HTML, CSS, Bootstrap, and FontAwesome. The website is designed to showcase your development projects and skills in a clean and visually appealing manner.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imagecontainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textcontainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
