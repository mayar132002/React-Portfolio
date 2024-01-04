import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
    <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mayar Dev
        </motion.span>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="social">
          <img src="./facebook.png" alt="" />
          <img src="./instagram.png" alt="" />
          <img src="./dribbble.png" alt="" />
          <img src="./youtube.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
