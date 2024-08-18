import { useState } from "react";
import { useLang } from "../../../hooks/useLang";
// import RequestTableRow from "./RequestTableRow";
import Modal from "../../common/Modal";
import ApprovalModalBody from "./ApprovalModalBody";
import { activeComment, editProfileApi, editSlideApi } from "../../../api/apis";
// import { editProfile } from "../../../Store/userSlice";
/**
 * @param {Object} param0 
 * @param {[]} param0.headers 
 * @param {[]} param0.data
 * 
 * */ 
export default function ShowActiveRequestTable({ headers ,data,setData}) {
  const lang = useLang();
  const [choosen, setChoosen] = useState();
  const onClose=()=>{
    setChoosen(null);
  }
  const handleChoose = (item) => {
    setChoosen(item);
  };

  const handleApprove = async () => {
    let promise;
    switch (choosen.tableType) {
      case "category":
        promise = editSlideApi(choosen.id, { isActive: true });
        break;
      case "comment":
        promise = activeComment(choosen.id);
        break;
      case "profile":
        promise = editProfileApi(choosen.id, { isActive: true });
        break;
    }
    promise
      .then(() => {
        setData((state) => state.filter((item) => item.id != choosen.id));
      })
      .finally(() => setChoosen(null));
  };

  return (
    <div className="section-padding flex flex-col gap-5">
      <h1 className="text-gray-500">{lang("needApprovals")}</h1>
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
            {data.map((item) => (
              <tr
                onClick={() => handleChoose(item)}
                className="cursor-pointer hover:bg-gray-500"
                key={item.id}
              >
                <td>{lang(item.tableTitle)}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tfoot className="table-row-group w-full h-[3rem] relative">
            <div className="absolute w-full top-3 text-center pointer-events-none">
              <span className="text-gray-500">{lang("noValid")}</span>
            </div>
          </tfoot>
        )}
      </table>
      <Modal isOpen={choosen} onClose={onClose} title={lang("approval")}>
        <ApprovalModalBody handleApprove={handleApprove} item={choosen} />
      </Modal>
    </div>
  );
}
