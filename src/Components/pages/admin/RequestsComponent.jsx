import { useCallback, useState } from "react";
import { useLang } from "../../../hooks/useLang";
import RequestTable from "./RequestTable";
import AnswerRequest from "./AnswerRequest";
export default function RequestsComponent({ langKey, data, setIsActive }) {
  const lang = useLang();

  const [requestToRespond, setRequestToRespond] = useState(null);

  const handleSelectRequest = (index) => {
    setRequestToRespond(index);
    if (setIsActive) setIsActive(true);
  };

  const handleDeselect = () => {
    setRequestToRespond(null);
    if (setIsActive) setIsActive(false);
  };

  return (
    <div className="section-padding pt-5 w-full">
      {requestToRespond!=null ? (
        <AnswerRequest
          handleBack={handleDeselect}
          data={data[requestToRespond]}
        />
      ) : (
        <div className="flex flex-col gap-5">
          <h1 className="text-gray-500">{lang(langKey)}</h1>
          <RequestTable
            onSelectRow={handleSelectRequest}
            headers={["title", "description", "createdDate"]}
            data={data}
          />
        </div>
      )}
    </div>
  );
}
