import React from "react";
import { useRef, useEffect } from "react";

const Carousel = ({
  images,
  setWidth,
  xPosition,
  handleClickPrev,
  handleClicknext,
}) => {
  const slideRef = useRef();
  useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);
  return <div></div>;
};

export default Carousel;
