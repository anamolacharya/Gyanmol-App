import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import GyanmolBanner from "../images/GyanmolBanner.png";
import SearchBar from "../components/SearchBar";
import TopicSliderList from "../components/TopicSlider/TopicSliderList";
// import { motion, useAnimation } from "framer-motion/dist/framer-motion";
// import { useInView } from "react-intersection-observer";

const HomePage = () => {
  // const boxVariant = {
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  //   hidden: { opacity: 0, scale: 0 },
  // };

  return (
    <>
      <Banner image={GyanmolBanner} />
      <SearchBar />
      {/* <motion.div
        variants={boxVariant}
        className="box"
        initial="hidden"
        animate="visible"
      >
        {/* <h1>Box</h1> 
       
      </motion.div> */}
      <TopicSliderList />
    </>
  );
};

export default HomePage;
