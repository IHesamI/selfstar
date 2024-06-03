import LinkContainer from "../../../common/LinkContainer";
import MultiLangInputForm from "../../../common/MultiLangInputForm";

export default function EditAboutUs() {
  return (
    <div className="flex flex-col">
      <MultiLangInputForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
        formInputFields={[
          {
            type: "textArea",
            commonOptions: {
              className: "resize-none",
            },
            label: "address-input",
            dataKey: "address-input-key",
            faOptions: { children: "آدرس", id: "address-input-key_fa" },
            enOptions: { children: "Address", id: "address-input-key_en" },
          },
        ]}
      />
      <div className="w-fit">
      <LinkContainer links={[]} setLinks={()=>{}} />
      </div>
    </div>
  );
}
