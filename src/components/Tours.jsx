import React from "react";
import { motion } from "framer-motion";
import { useGetAllToursQuery } from "../redux/TourApi";
function Tours() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const drop = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  const { isLoading, error, data } = useGetAllToursQuery();
 if(data){
  console.log(data)
 }
  return (
    <>
      {error ? (
        <p>An error has occurred</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="tour">
          {data.data.Tour.map((item, i) => (
            <div class="grid-container" key={i}>
              <motion.div
                class="grid-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                variants={variants}
              >
                <p>{item.name}</p>
                <h1>{item.state}</h1>
                <p>
                  {item.Description}
                </p>
              </motion.div>
              <motion.div
                class="grid-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: 1,
                  type: "spring",
                  duration: 2,
                  stiffness: "500",
                }}
                variants={drop}
              >
                <img src={item.Image1} alt="" />
              </motion.div>
              <motion.div
                class="grid-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: 1.5,
                  type: "spring",
                  duration: 2,
                  stiffness: "500",
                }}
                variants={drop}
              >
                <img src={item.Image2} alt="" />
              </motion.div>
              <motion.div
                class="grid-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: 2,
                  type: "spring",
                  duration: 2,
                  stiffness: "500",
                }}
                variants={drop}
              >
                <img src={item.Image3} alt="" />
              </motion.div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Tours;
