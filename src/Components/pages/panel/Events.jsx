import React from "react";
import SlidesTable from "../../common/SlidesTable";
import AddSlide from "./AddSlide";
import { useLang } from "../../../hooks/useLang";
import SliderProviders from "../../common/SliderProviders";

export default function Events() {
  const lang = useLang();
  return (
    <div className="flex flex-col section-padding w-full mt-10 gap-5 mb-5">
      <div>
        <h1 className="w-[40%] pb-2 text-gray-500 font-bold mb-10 border-b-[1px] border-gray-300">
          {lang("upcomingEvents")}
        </h1>
        <div className=" h-[20rem] max-h-[25rem] w-full relative">
          <SliderProviders
            data={[1, 2, 3, 5, 1, 2, 3, 4, 5, 6]}
            // data={[6]}
          ></SliderProviders>
        </div>
      </div>
      <AddSlide />
      <div className="h-[30rem] overflow-auto">
        <SlidesTable
          headers={["title", "description", "file", "action"]}
          data={[
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
            {
              file: "editslide",
              description:
                "اسلایدهای جلسه دفاع از پایان نامه کارشناسی ارشد.\n\n انجام شده در زمستان ۹۳",
              title:
                "ارائه مدلی جهت افزودن چرخه کنترلی خودتطبیقی به سامانه های چندعامله            ",
            },
          ]}
        />
      </div>
    </div>
  );
}
