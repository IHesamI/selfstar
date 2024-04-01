import React from "react";
import EventCard from "./EventCard";
import useSlider from "../../hooks/useSlider";

export default function SliderProviders({ data, type }) {
  const {
    sliderRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    direction,
    lastElement,
    firstElement,
  } = useSlider();

  return (
    <div className="overflow-hidden cursor-pointer">
      <div
        style={{ right: `${direction}px` }}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="h-full p-4 flex flex-row gap-[5rem] w-fit relative"
      >
        {data.map((item, index) => {
          return (
            <div
              key={index}
              ref={
                index == 0
                  ? firstElement
                  : index == data.length - 1
                  ? lastElement
                  : null
              }
              className="h-full shadow-lg w-max overflow-hidden cursor-pointer"
            >
              <EventCard
                date={new Date().toString()}
                title={
                  "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله"
                }
                location={
                  "دانشگاه شهید بهشتی سالن ابوریحان مرکز همایش های بین المللی همینطور دانشگاه تهران مرکز اجلاس سران"
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
