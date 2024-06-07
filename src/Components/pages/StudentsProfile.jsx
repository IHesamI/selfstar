import { useLang } from "../../hooks/useLang";
import Avatar from "./Avatar";
export default function StudentsProfile({ studentInfo }) {
  const { educationHistory, email, last_name, name, profile_id, rule,avatar_url,resume_url,thesis,links } =studentInfo;
  const lang = useLang();
  function renderText(key, value) {
    return `${lang(key)} : ${value}`;
  }
  function handleCopy() {
    navigator.clipboard.writeText(email);
  }
  // TODO Fix Link
  return (
    <div className="flex flex-row [&>*:nth-child(odd)]:bg-gray-200 text-gray-600 border-x-[3px] border-y-[1px] border-gray-400  sm:flex-col">
      <div className="flex flex-col gap-3 p-5 max-w-[15.5rem] sm:max-w-full">
        <a href="/members/123123">
          <Avatar image={avatar_url} />
        </a>

        <div className="flex flex-col">
          <ul className="space-y-4">
            <li className="list-item ">{renderText("firstName", name)}</li>
            <li className="list-item ">{renderText("lastName", last_name)}</li>
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
          {thesis && (
            <a
              className="hover:text-blue-600 cursor-pointer text-justify flex"
              href={thesis}
            >
              {renderText("thesisTitle", thesis)}
            </a>
          )}
        </div>
        <div className="text-justify">
          {educationHistory && renderText("cv", educationHistory)}
        </div>
        <div className="flex flex-wrap gap-[3rem] sm:pb-5">
          {links?.map((link,index) => {
            return (
              <li key={link.url + link.title+index}>
                <a
                  className="hover:text-blue-600"
                  href={`https://${link.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
