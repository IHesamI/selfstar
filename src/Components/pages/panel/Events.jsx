import { useEffect, useState } from "react";
import SlidesTable from "../../common/SlidesTable";
import AddSlide from "./AddSlide";
import { useLang } from "../../../hooks/useLang";
import SliderProviders from "../../common/SliderProviders";
import { getEventsApi, getSlidesApi } from "../../../api/apis";
import { useSelector } from "react-redux";

export default function Events() {
  const lang = useLang();
  const [events, setEvents] = useState([]);
  const [slides, setSlides] = useState([]);
  const profile=useSelector(state=>state.profile);
  useEffect(() => {
    const fetchEvents = async () => {
      getEventsApi(1).then((res) => setEvents(res.data));
      getSlidesApi(1).then((res) => setSlides(res.data));
      // setEvents(eventsRes);
      
    };
    fetchEvents();
  }, []);
  return (
    <div className="flex flex-col section-padding w-full mt-10 gap-5 mb-5">
      <div>
        <h1 className="w-[40%] pb-2 text-gray-500 font-bold mb-10 border-b-[1px] border-gray-300">
          {lang("upcomingEvents")}
        </h1>
        <div className=" h-[20rem] max-h-[25rem] w-full relative">
          <SliderProviders
            data={events}
            // data={[6]}
          ></SliderProviders>
        </div>
      </div>
      <AddSlide setSlides={setSlides} user_id={1} />
      <div className="h-fit max-h-[60rem] overflow-y-auto">
        <SlidesTable
          setSlides={setSlides}
          headers={["title", "description", "file", "action"]}
          data={slides}
        />
      </div>
    </div>
  );
}
