import React from "react";
import MultiLangInputForm from "../../../common/MultiLangInputForm";
import LinkContainer from "../../../common/LinkContainer";

export default function EditMembers() {
  return (
    <div>
      <MultiLangInputForm
        onSubmit={(e) => {
          e.preventDefault();
          console.error(e.target);
        }}
        formInputFields={[
          {
            type: "textarea",
            commonOptions: {
              className: "resize-none",
            },
            label: "about-head-of-group",
            dataKey: "footerAboutUs",
            faOptions: { children: "درباره ما", id: "footerAboutUs_fa" },
            enOptions: { children: "About us", id: "footerAboutUs_en" },
          },
        ]}
      >
        <div className="w-fit mt-10">
        <LinkContainer />
        </div>
      </MultiLangInputForm>
    </div>
  );
}
