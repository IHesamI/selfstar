import React from "react";
import { useLang } from "../../hooks/useLang";
import Avatar from "./Avatar";
export default function StudentsProfile({ studentInfo }) {
  const {
    image,
    firstName,
    lastName,
    rule,
    cv,
    thesis,
    email,
    links,
    thesisurl,
  } = studentInfo;
  const lang = useLang();
  function renderText(key, value) {
    return `${lang(key)} : ${value}`;
  }
  function handleCopy() {
    navigator.clipboard.writeText(email);
  }
  return (
    <div className="flex flex-row [&>*:nth-child(odd)]:bg-gray-200 text-gray-600 border-x-[3px] border-y-[1px] border-gray-400  sm:flex-col">
      <div className="flex flex-col gap-3 p-5 max-w-[15.5rem]">
        <a href="/members/123123">
          <Avatar image={image} />
        </a>

        <div className="flex flex-col">
          <ul className="space-y-4">
            <li className="list-item ">{renderText("firstName", firstName)}</li>
            <li className="list-item ">{renderText("lastName", lastName)}</li>
            {rule && <li className="list-item ">{renderText("rule", rule)}</li>}
            {email && (
              <li
                className="list-item cursor-pointer"
                onClick={handleCopy}
                title={lang("copyEmail")}
              >
                {renderText("email", email)}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex flex-col pt-3 px-5 space-y-10">
        <div>
          <a
            className="hover:text-blue-600 cursor-pointer text-justify flex"
            href={thesisurl}
          >
            {renderText("thesisTitle", thesis)}
          </a>
        </div>
        <div className="text-justify">{cv && renderText("cv", cv)}</div>
        <div className="flex flex-wrap gap-[3rem]">
          {links?.map((link) => {
            return (
              <li>
                <a
                  className="hover:text-blue-600"
                  href={link.url}
                  target="_blank"
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}