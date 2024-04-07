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
    <div className="border-[1px] border-gray-500 w-[20%] border-collapse">
      <div
        onClick={hanldeOpen}
        className="flex flex-row gap-3 cursor-pointer border-collapse w-100% px-2 border-b-[1px] border-gray-500"
      >
        <DownArrow />
        <span>{lang("chooseStudent")}</span>
      </div>
      {isOpen && (
        <div className="flex flex-col search-with-select  overflow-x-hidden w-full">
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
          <div className="flex flex-col w-[105%] max-h-[10rem] overflow-x-hidden overflow-y-scroll">
            {[
              {
                id:'1',
                name:'رحمان رحیم زاده'
              },
              {
                id:'2',
                name:'مژده صالحی'
              },
            ].map((item) => {
              return (
                <div key={item.id} className="hover:bg-blue-500 w-full hover:text-white cursor-pointer text-nowrap px-3 text-ellipsis h-fit">
                  {item.name}
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
