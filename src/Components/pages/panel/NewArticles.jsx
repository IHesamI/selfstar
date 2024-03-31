import React from "react";
import ArticlesTable from "../../common/ArticlesTable";
import AddArticle from "./AddArticle";

export default function NewArticles() {
  return (
    <div className="flex flex-col section-padding w-full pt-7 mb-6 gap-5">
      <AddArticle />
      <div className="max-h-[40rem] overflow-y-auto">
        <ArticlesTable
          headers={["title", "file", "action"]}
          data={[
            {
              articleTitle:
                "مدل FHOrganization؛ مدل سازمان دهی جدید برای سامانه های چندعامل ",
              file: "http://selfstar.sbu.ac.ir/wp-content/uploads/2018/02/msc-finalthesis-rahmanzadeh.pdf",
            },
          ]}
        />
      </div>
    </div>
  );
}
