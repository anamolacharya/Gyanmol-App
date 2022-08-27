import React, { useEffect } from "react";
import TopicSlider from "./TopicSlider";
import "../../css/homePage.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function TopicSliderList() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="box"
      >
        <TopicSlider />
      </motion.div>

      <div className="topicSlider"> {/* <TopicSlider /> */}</div>
    </>
  );
}
