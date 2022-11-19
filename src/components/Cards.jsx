import React, { useState } from "react";
import { motion } from "framer-motion";
import nig from "../assets/nigeria.jpg";
function Cards() {
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="card">
      <div className="discover">
        <motion.div
          className="text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 3,
            type: "spring",
            stiffness: "200",
            //   damping: 25,
          }}
        >
          <h1>
            Discover <span>Nigeria</span>
          </h1>
          <p>take a glimpse of africa’s bewitching attractions</p>
        </motion.div>
      </div>

      <motion.div
        className="landing"
        initial={false}
        animate={
          isLoaded
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <img src={nig} alt="" onLoad={() => setIsLoaded(true)}/>
      </motion.div>
    </div>
  );
}

export default Cards;
