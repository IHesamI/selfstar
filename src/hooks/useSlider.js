import { useEffect, useState, useRef } from "react";

export default function useSlider() {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState(0);
  const position = useRef(null);
  const lastElement = useRef(null);
  const mouseDownFlag = useRef(null);
  const maxMinPositions = useRef([]);
  useEffect(() => {
    if (lastElement.current) {
      // console.error(lastElement.current.getBoundingClientRect());
      maxMinPositions.current = {
        max: 100,
        min:
          lastElement.current.getBoundingClientRect().x -
          lastElement.current.getBoundingClientRect().width,
      };
    }
  }, []);

  const leftClick = () => {
    changeDirection(-lastElement.current.getBoundingClientRect().width);
  };
  const rightClick = () => {
    changeDirection(lastElement.current.getBoundingClientRect().width);
  };
  const changeDirection = (measure) => {
    if (direction + measure <= maxMinPositions.current.min) {
      setDirection(maxMinPositions.current.min);
    } else if (direction + measure >= maxMinPositions.current.max) {
      setDirection(maxMinPositions.current.max);
    } else {
      setDirection(measure + direction);
    }
  };
  const handleMouseDown = (e) => {
    mouseDownFlag.current = true;
    position.current = e.clientX;
  };
  const handleMouseUp = () => {
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
      changeDirection(newPosition);
    }
  };

  return {
    sliderRef,
    direction,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    lastElement,
    rightClick,
    leftClick,
  };
}
