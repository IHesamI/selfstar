import React from "react";
import { useLang } from "../../hooks/useLang";

export default function MultiLangInputForm({ onSubmit, formInputFields ,children}) {
  const lang = useLang();
  const { fa: headerFa, en: headeren } = lang.getByKey("inputFormtitle");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.error(e.target);
  };
  function renderContainer(item) {
    const langKeyValues = lang.getByKey(item.label);
    return (
      <>
        <div className="multilang-row-container">
          <label htmlFor="">{langKeyValues["fa"]}</label>
          {React.createElement(item.type, {
            ...item.commonOptions,
            ...item.faOptions,
          })}
        </div>
        <div
          dir={"ltr"}
          className="multilang-row-container"
        >
          <label htmlFor="">{langKeyValues["en"]}</label>
          {React.createElement(item.type, {
            ...item.commonOptions,
            ...item.enOptions,
          })}
        </div>
      </>
    );
  }
  return (
    <div dir="rtl" className="flex flex-col">
      <div className="flex flex-row mb-10 w-full justify-between">
        <h3>{headerFa}</h3>
        <h3>{headeren}</h3>
      </div>
      <form className="multilang-form" onSubmit={handleSubmitForm}>
        {formInputFields.map((item, index) => {
          return (
            <div key={index} className="multilang-form-row">
              {renderContainer(item)}
            </div>
          );
        })}

        {children}
        <button
          type="submit"
          className="bg-blue-500 text-white w-fit px-3 py-2 rounded-lg mt-10 self-end mb-10 hover:bg-blue-400"
        >
          {lang("click")}
        </button>
      </form>
    </div>
  );
}
