/**
 * createAt

avatar_url
: 
"itemc2de04a8-3263-4454-946b-e5baa3150885.jpg"
educationHistory_en
: 
null
educationHistory_fa
: 
"دانشجوی کارشناسی دانشگاه شهید بهشتی"
email
: 
"hes@gmail.com"
id
: 
1
isActive
: 
false
last_name_en
: 
null
last_name_fa
: 
"بهبودی"
links
: 
[]
name_en
: 
null
name_fa
: 
"حسام"
profile_id
: 
1
resume_url
: 
null
rule_en
: 
null
rule_fa
: 
null
stage
: 
null
tableTitle
: 
"profileApprove"
tableType
: 
"profile"
 * */
import { downloadPrefixUlr } from "../../../config";
import { useLang } from "../../../hooks/useLang";

export default function ApprovalModalBody({ item ,handleApprove}) {
  const lang = useLang();
  const renderComment = () => {
    return (
      <div className="flex flex-col gap-7 min-w-[15rem]">
        <div className="flex flex-col gap-3">
          <label className="font-bold text-gray-600" htmlFor="">
            {lang("name")}
          </label>
          <span>{item.name}</span>
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-bold text-gray-600" htmlFor="">
            {lang("description")}
          </label>
          <span>{item.description || "خالی است!"}</span>
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-bold text-gray-600" htmlFor="">
            {lang("email")}
          </label>
         <span>{item.email}</span>
        </div>
        <button
          onClick={handleApprove}
          className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg self-end"
        >
          {lang("click")}
        </button>
      </div>
    );
  };
  const properStage= ()=>{
    switch(item.stage){
        case 1:
            default:
            return lang('stage1');
        case 2:
            return lang('stage2');
        case 3:
            return lang('stage3');
    }
  }

  const properName  = ()=>{
    if (item.name_fa){
        return `${item.name_fa} ${item.last_name_fa}`
    }else {
        return ''
    }
  }
  const renderProfile = () => {
    return <div className="flex flex-col gap-7 min-w-[15rem]">
    <div className="flex flex-col gap-3">
      <label className="font-bold text-gray-600" htmlFor="">
        {lang("name")}
      </label>
      <span>{properName()}</span>
    </div>
    <div className="flex flex-col gap-3">
      <label className="font-bold text-gray-600" htmlFor="">
        {lang("studentStage")}
      </label>
      <span>{properStage()}</span>
    </div>
    <div className="flex flex-col gap-3">
      <label className="font-bold text-gray-600" htmlFor="">
        {lang("email")}
      </label>
      <span>{item.email}</span>
    </div>
    <button onClick={handleApprove} className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg self-end">
      {lang("click")}
    </button>
  </div>
  };

  const renderCategory = () => {
    return (
      <div className="flex flex-col gap-7 min-w-[15rem]">
        <div className="flex flex-col gap-3">
          <label className="font-bold text-gray-600" htmlFor="">
            {lang("title")}
          </label>
          <span>{item.title}</span>
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-bold text-gray-600" htmlFor="">
            {lang("description")}
          </label>
          <span>{item.description || "خالی است!"}</span>
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-bold text-gray-600" htmlFor="">
            {lang("link")}
          </label>
          <button className="bg-gray-600 px-3 py-2 text-white w-fit rounded-lg self-start">
          <a href={`${downloadPrefixUlr}${item.file_url}`}>
            {lang("download")}
          </a>
          </button>
        </div>
        <button onClick={handleApprove} className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg self-end">
          {lang("click")}
        </button>
      </div>
    );
  };
  return (
    <>
      {item.tableType == "category"
        ? renderCategory()
        : item.tableType == "profile"
        ? renderProfile()
        : renderComment()}
    </>
  );
}
