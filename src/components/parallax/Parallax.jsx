import  { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll, useTransform } from 'framer-motion';
import './parallax.scss';

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBG = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg,#0c0c1d,#111132)'
            : 'linear-gradient(180deg,#0c0c1d,#505064)',
      }}
    >
      <motion.h1 style={{ y: ytext }}>
        {type === 'services' ? "What Mayar Do" : "What I'm Did"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBG }} className="planets"></motion.div>
      <motion.div style={{ x: yBG }} className="stars"></motion.div>
    </motion.div>
  );
};

Parallax.propTypes = {
  type: PropTypes.oneOf(['services', 'otherType']).isRequired,
};

export default Parallax;
