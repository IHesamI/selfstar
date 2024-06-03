import React from "react";
import EventCard from "./EventCard";
import useSlider from "../../hooks/useSlider";
import LeftIcon from "../../assets/image/LeftIcon";

export default function SliderProviders({ data, type }) {
  const {
    sliderRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    direction,
    lastElement,
    leftClick,
    rightClick,
  } = useSlider();

  return (
    <div className="overflow-hidden cursor-pointer absolute w-full">
      <div
        onClick={leftClick}
        className="flex flex-col absolute left-0 justify-center hover:bg-gray-500  hover:bg-opacity-15 z-20 items-center text-center h-full"
      >
        <LeftIcon color={"#000"} />
      </div>
      <div
        onClick={rightClick}
        className="flex flex-col absolute hover:bg-gray-500 hover:bg-opacity-15 z-20 right-0 justify-center items-center text-center h-full"
      >
        <LeftIcon color={"#000"} rotation />
      </div>
      <div
        style={{ right: `${direction}px` }}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="h-full slider p-4 flex flex-row gap-[5rem] w-fit relative"
      >
        {data.map((item, index) => {
          return (
            <div
              key={item.event_id}
              data-index={index}
              ref={index == data.length - 1 ? lastElement : null}
              className="h-full shadow-lg w-max overflow-hidden cursor-pointer"
            >
              <EventCard
                date={item.event_time}
                title={item.title}
                location={item.location}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
