import React, { useRef, useState } from "react";
import { useLang } from "../../hooks/useLang";
import { Status } from "../../config";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import StatusComp from "./Status";
import { deleteRequestApi, editRequestApi } from "../../api/apis";

export default function RequestsTable({ headers, data,setRequests }) {
  const lang = useLang();
  const [isEditOpen, setisEditOpen] = useState(false);
  const editInputRef = useRef({});
  const [toEdit,setToEdit]=useState({});
  
  const handleInput = (key, value) => {
    editInputRef.current = { ...editInputRef.current, [key]: value };
  };

  const handleDelete = (id) => {
    deleteRequestApi(id).then(() =>
      setRequests((state) =>
        state.filter((request) => request.request_id != id)
      )
    );
  };
  const onOpenClick=(id)=>{
    setToEdit(data.find((request) => request.request_id == id));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    editRequestApi(toEdit.request_id,editInputRef.current).then((res)=>{
      const resultReq=res.data;
      setRequests((requests) =>
        requests.map((request) => {
          if (resultReq.request_id == request.request_id) return resultReq;
          return request;
        })
      );
    }).finally(()=>setisEditOpen(false));
    ;
  };
  return (
    <>
      <table className="table max-h-[35rem]">
        <thead>
          <tr className="border-[1px] border-gray-500 border-collapse">
            {headers.map((item) => (
              <th
                key={item}
                className="text-start border-[1px] p-1 border-gray-300 border-collapse "
              >
                {lang(item)}
              </th>
            ))}
          </tr>
        </thead>
        {data.length != 0 ? (
          <tbody>
            {data.map((request, index) => (
              <tr key={index} className="text-gray-700">
                {headers.map((field) => {
                  return field == "status" ? (
                    <StatusComp
                      key={request.request_id}
                      status={request[field]}
                    />
                  ) : field != "action" ? (
                    <td key={field} className={`${field}`}>
                      {request[field]}
                    </td>
                  ) : (
                    <td>
                      <div className="flex flex-row items-center justify-center gap-2">
                        <EditModal
                          isEditOpen={isEditOpen}
                          setisEditOpen={setisEditOpen}
                          id={request.request_id}
                          onOpenClick={onOpenClick}
                          modalTitle={lang("editRequest")}
                          title={request["title"]}
                          description={request["description"]}
                        >
                          <form onSubmit={handleSubmit} action="PUT">
                            <div className="flex flex-col text-start gap-5">
                              <div className="dashboard-fields-row">
                                <div className="dashboard-fields-container">
                                  <label htmlFor="title">{lang("title")}</label>
                                  <input
                                    id="title"
                                    type="text"
                                    defaultValue={toEdit.title}
                                    onChange={(e) =>
                                      handleInput("title", e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="dashboard-fields-row">
                                <div className="dashboard-fields-container">
                                  <label htmlFor="requestBody">
                                    {lang("description")}
                                  </label>
                                  <textarea
                                    className="border-[1px] border-gray-400 h-[7rem] resize-none p-1"
                                    id="requestBody"
                                    defaultValue={toEdit.description}
                                    onChange={(e) =>
                                      handleInput("description", e.target.value)
                                    }
                                  ></textarea>
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg"
                              >
                                {lang("click")}
                              </button>
                            </div>
                          </form>
                        </EditModal>
                        <DeleteModal
                          id={request.request_id}
                          handleDelete={handleDelete}
                          modalTitle={lang("deleteRequestTitle")}
                          text={lang("deleteRequest")}
                        />
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        ) : (
          <tfoot className="table-row-group w-full h-[3rem] relative">
            <div className="absolute w-full top-3 text-center pointer-events-none">
              <span className="text-gray-500">{lang("noRequest")}</span>
            </div>
          </tfoot>
        )}
      </table>
    </>
  );
}
