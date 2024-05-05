import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "./image-data";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const autoChangeTime = 3000; // 3 seconds

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, autoChangeTime);

    return () => clearInterval(interval);
  }, [page]);

  const imageIndex = (index) => {
    const wrappedIndex = index % images.length;
    return wrappedIndex >= 0 ? wrappedIndex : images.length + wrappedIndex;
  };

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex(page)]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={
            {
              // x: { type: "spring", stiffness: 300, damping: 30 },
              // opacity: { duration: 0.2 },
            }
          }
          drag="x"
          //   dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </>
  );
};

export default Slider;
