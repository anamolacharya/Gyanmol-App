import React, { useEffect } from "react";
import TopicsBanner from "./TopicsBanner";
import TopicsDetails from "./TopicsDetails";
import AWSbanner from "../../images/AWSbanner.png";
import AZ900Banner from "../../images/AZ900Banner.png";
import NCLEXBanner from "../../images/NCLEXBanner.png";
import SATBanner from "../../images/SATBanner.png";

// import { motion, useAnimation } from "framer-motion/dist/framer-motion";
// import { useInView } from "react-intersection-observer";

// const boxVariant = {
//   visible: { opacity: 0.75, scale: 1, transition: { duration: 0.75 } },
//   hidden: { opacity: 0, scale: 0 },
// };

function TopicSlider() {
  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);

  return (
    <>
      {/* <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="box"
      >
        <TopicsBanner image={AWSbanner} />
        <TopicsDetails />
      </motion.div>

      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="box"
      >
        <TopicsBanner image={AZ900Banner} />
        <TopicsDetails />
      </motion.div>

      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="box"
      >
        <TopicsBanner image={NCLEXBanner} />
        <TopicsDetails />
      </motion.div>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="box"
      >
        <TopicsBanner image={SATBanner} />
        <TopicsDetails />
      </motion.div> */}
      <TopicsBanner image={AWSbanner} />
      <TopicsDetails />
      <TopicsBanner image={AZ900Banner} />
      <TopicsDetails />
      <TopicsBanner image={NCLEXBanner} />
      <TopicsDetails />
      <TopicsBanner image={SATBanner} />
      <TopicsDetails />
    </>
  );
}

export default TopicSlider;
