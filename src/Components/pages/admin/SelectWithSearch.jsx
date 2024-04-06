import React, { memo, useState } from "react";
import SearchIcon from "../../../assets/image/SearchIcon";
import { useLang } from "../../../hooks/useLang";
import DownArrow from "../../../assets/image/DownArrow";

const SelectWithSearch = memo(() => {
  const lang = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const hanldeOpen = () => {
    setIsOpen((state) => !state);
  };
  return (
    <div className="border-[1px] border-gray-500 w-[20%] border-collapse search-with-select ">
      <div
        onClick={hanldeOpen}
        className="flex flex-row gap-3 cursor-pointer border-collapse w-100% px-2 border-b-[1px] border-gray-500"
      >
        <DownArrow />
        <span>یک دانشجو را انتخاب کنید</span>
      </div>
      {isOpen && (
        <div className="flex flex-col">
          <div className="flex flex-row border-[1px] border-gray-300 w-fit px-1">
            <button className="fill-[#1212] hover:fill-black">
              <SearchIcon />
            </button>
            <input
              type="text"
              className="outline-none border-none"
              placeholder={lang("search")}
            />
          </div>
          <div className="flex flex-col w-full h-[10rem] overflow-x-hidden overflow-y-scroll">
            {[1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div className="hover:bg-blue-500 w-full hover:text-white cursor-pointer text-nowrap px-3 text-ellipsis h-fit">
                  رحام رحیم زادهewrewrwerwerewrewrwerwerwer
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
});
export default SelectWithSearch;
