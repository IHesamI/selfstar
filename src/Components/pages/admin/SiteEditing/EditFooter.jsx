import React from "react";
import MultiLangInputForm from "../../../common/MultiLangInputForm";

export default function EditFooter() {
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
            label: "about-us-footer",
            dataKey: "footerAboutUs",
            faOptions:{children:'درباره ما',id:'footerAboutUs_fa'},
            enOptions:{children:"About us",id:'footerAboutUs_en'},
          },
        ]}
      />
    </div>
  );
}
