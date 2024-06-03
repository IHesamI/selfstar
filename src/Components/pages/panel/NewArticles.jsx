import React, { useEffect, useState } from "react";
import ArticlesTable from "../../common/ArticlesTable";
import AddArticle from "./AddArticle";
import { getArticleApi } from "../../../api/apis";

export default function NewArticles() {
  const [articles,setArticles]=useState([]);
  useEffect(() => {
    const getArticles = () => {
      getArticleApi(1).then((res) => setArticles(res.data));
    };
    getArticles();
  }, []);
  return (
    <div className="flex flex-col section-padding w-full pt-7 mb-6 gap-5">
      <AddArticle setArticles={setArticles} />
      <div className="max-h-[40rem] overflow-y-auto">
        <ArticlesTable
          setData={setArticles}
          headers={["title", "file", "action"]}
          data={articles}
        />
      </div>
    </div>
  );
}
