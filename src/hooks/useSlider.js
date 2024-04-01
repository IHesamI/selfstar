import { useEffect, useState, useRef } from "react";

export default function useSlider() {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState(0);
  const position = useRef(null);
  const lastElement = useRef(null);
  const firstElement = useRef(null);
  const mouseDownFlag = useRef(null);
  const maxMinPositions = useRef([]);
  useEffect(() => {
    if (firstElement.current && lastElement.current) {
    //   console.error(firstElement.current.getBoundingClientRect());
    //   console.error(lastElement.current.getBoundingClientRect());
      maxMinPositions.current = {
        max: firstElement.current.getBoundingClientRect().x + 100,
        min: lastElement.current.getBoundingClientRect().x - 100,
      };
    }
  }, []);

  const handleMouseDown = (e) => {
    mouseDownFlag.current = true;
    position.current = e.clientX;
  };
  const handleMouseUp = (e) => {
    mouseDownFlag.current = false;
    position.current = direction;
  };

  const handleMouseMove = (e) => {
    if (mouseDownFlag.current) {
      let newPosition = position.current - e.clientX;
      // if (direction != 0) {
      //     newPosition += direction;
      //     setDirection(newPosition);
      //     return;
      // }
      position.current = e.clientX;
    //   console.error(
    //     direction + newPosition,
    //     maxMinPositions.current.max,
    //     maxMinPositions.current.min
    //   );
      if (
        direction + newPosition > maxMinPositions.current.min &&
        direction + newPosition < maxMinPositions.current.max
      )
        setDirection(direction + newPosition);
    }
  };

  return {
    sliderRef,
    direction,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    lastElement,
    firstElement,
  };
}
