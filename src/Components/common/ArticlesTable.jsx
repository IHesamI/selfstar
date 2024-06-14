import { useRef, useState } from "react";
import { useLang } from "../../hooks/useLang";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import FileDownloadIcon from "../../assets/image/FileDownloadIcon";
import UploadFile from "./UploadFile";
import { deleteCategoryApi, editArticleApi, sendEvent } from "../../api/apis";
import { downloadPrefixUlr } from "../../config";

export default function ArticlesTable({ headers, data,setData }) {

  const lang = useLang();
  const [isEditOpen, setisEditOpen] = useState(false);

  const [editArticle, setEditArticle] = useState({});
  const editInputRef = useRef({});
  const onEditOpen = (id) => {
    setEditArticle(data.find((item) => item.article_id == id));
  };
  const handleInput = (key, value) => {
    editInputRef.current = { ...editInputRef.current, [key]: value };
  };

  const handleDelete = (id) => {
    sendEvent("click", "delete-article");
    deleteCategoryApi(id).then(() => {
      setData((articles) => articles.filter((article) => article.id != id));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editArticleApi(editArticle.article_id, editInputRef.current)
      .then((res) => {
        const result = res.data;
        setData((data) =>
          data.map((item) => {
            if (result.article_id == item.article_id) return result;
            return item;
          })
        );
      })
      .finally(() => setisEditOpen(false));
  };

  return (
    <>
      <table className="table max-h-[35rem]">
        <thead>
          <tr className="border-[1px] border-gray-500 border-collapse">
            {headers.map((item, index) => (
              <th
                key={index}
                className="text-start border-[1px] p-1 border-gray-300 border-collapse "
              >
                {lang(item)}
              </th>
            ))}
          </tr>
        </thead>
        {data.length != 0 ? (
          <tbody>
            {data.map((article,index) => (
              <tr key={index} className="text-gray-700">
                {headers.map((field) => {
                  return field == "file" ? (
                    <td key={field} className="file">
                      <a
                        className="flex flex-row p-3 gap-2 hover:bg-gray-100"
                        href={
                          article["file_url"]
                            ? `${downloadPrefixUlr}${article["file_url"]}`
                            : ""
                        }
                      >
                        <FileDownloadIcon color={"#121212"} />
                        <span>{lang("download")}</span>
                      </a>
                    </td>
                  ) : field != "action" ? (
                    <td key={field} className={`${field} w-[70%]`}>
                      {article[field]}
                    </td>
                  ) : (
                    <td className="w-[10%]">
                      <div className=" flex flex-row items-center justify-center gap-2">
                        <EditModal
                          id={article.article_id}
                          isEditOpen={isEditOpen}
                          setisEditOpen={setisEditOpen}
                          onOpenClick={onEditOpen}
                          modalTitle={lang("editArticle")}
                        >
                          <form onSubmit={handleSubmit} action="PUT">
                            <div className="flex flex-col text-start gap-5">
                              <div className="dashboard-fields-row">
                                <div className="dashboard-fields-container">
                                  <label htmlFor="title">{lang("title")}</label>
                                  <input
                                    id="title"
                                    type="text"
                                    defaultValue={editArticle.title}
                                    onChange={(e) =>
                                      handleInput("title", e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="dashboard-fields-row">
                                <UploadFile />
                              </div>
                              <button className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg">
                                {lang("click")}
                              </button>
                            </div>
                          </form>
                        </EditModal>
                        <DeleteModal
                          handleDelete={handleDelete}
                          id={article.id}
                          modalTitle={lang("deleteArticleTitle")}
                          text={lang("deleteArticle")}
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
              <span className="text-gray-500">{lang("noarticle")}</span>
            </div>
          </tfoot>
        )}
      </table>
    </>
  );
}
