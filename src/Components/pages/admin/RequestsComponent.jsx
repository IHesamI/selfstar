import { useCallback, useState } from "react";
import { useLang } from "../../../hooks/useLang";
import RequestTable from "./RequestTable";
import AnswerRequest from "./AnswerRequest";
export default function RequestsComponent({langKey,data}) {
  console.error(data);
  const lang = useLang();

  const [requestToRespond, setRequestToRespond] = useState(null);

  const handleSelectRequest = useCallback((index) => {
    setRequestToRespond(index);
  }, []);
  const handleDeselect = useCallback(() => {
    setRequestToRespond(null);
  }, []);
  return (
    <div className="section-padding pt-5 w-full">
      {requestToRespond != null ? (
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
