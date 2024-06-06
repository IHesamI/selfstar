import { useEffect, useState } from "react";
import { useLang } from "../../hooks/useLang";
import StudentsProfile from "./StudentsProfile";
import "./pages.css";
import { getMembersApi } from "../../api/apis";
export default function Members() {
  const lang = useLang();
  const [members, setMembers] = useState([]);
  const [pageInfo, setPageInfo] = useState();
  
  const mapToProperField = (member) => {
    const resultFields = ["name", "last_name", "educationHistory", "rule"];
    let result = {};
    resultFields.forEach((multilangField) => {
      result[multilangField] = member[`${multilangField}_${lang.langType}`];
    });
    result={
      ...result,
      profile_id: member["profile_id"],
      email: member["email"],
      ...member
    };
    return result
  };
  useEffect(()=>{
    const fetcher = async () => {
      const response = await getMembersApi();
      setMembers(response.data);
    };
    fetcher()
  },[]);
  return (
    <div
      dir={lang.isRtl ? "rtl" : "ltr"}
      className="flex flex-col section-paddin [&>*:nth-child(even)]:bg-gray-600 [&>*:nth-child(even)]:text-gray-300  sm:w-full sm:p-0"
    >
      <div className="flex flex-col gap-3 [&>*:nth-child(odd)]:bg-gray-200 [&>*:nth-child(odd)]:text-gray-600 border-[3px] border-gray-400">
        <div className="flex flex-row justify-center p-3 ">
          <img
            className="image-container"
            src={
              "https://eco.sbu.ac.ir/image/journal/article?img_id=48414960&t=1709110914993"
            }
            alt="دکتر اسلام ناظمی هیئت علمی دانشگاه شهید بهشتی"
          />
        </div>
        <div className="text-center p-3 border-[1px] border-y-gray-300 font-bold text-gray-500">
          <h1>دکتر اسلام ناظمی سرپرست گروه تحقیقاتی خود تطبیقی</h1>
        </div>
        <div className="flex flex-col p-3 gap-3">
          <div className="text-justify">
            اسلام ناظمی در سال ۱۳۳۳ در شهر سراب در ایران متولد شد. وی مدرک
            کارشناسی خود را در ریاضیات کاربردی و تحقیق در عملیات از مدرسه عالی
            برنامه ریزی و کاربرد کامپیوتر، تهران، ایران، در سال ۱۳۵۶، مدرک
            کارشناسی ارشد خود را در رشته های مهندسی سیستم و اقتصاد سیستم به
            ترتیب در سال های ۱۳۶۶ و ۱۳۷۵ و نیز مدرک دکتری خود را در رشته مهندسی
            صنایع و فناوری اطلاعات در سال ۱۳۸۴ دریافت کرد. اسلام ناظمی از سال
            ۱۳۵۷ عضو هیئت علمی مدرسه عالی برنامه ریزی و کاربرد کامپیوتر بوده و
            از سال ۱۳۶۵ تا کنون عضو هیئت علمی دانشگاه شهید بهشتی تهران است.
            ایشان معاون آموزش و تحصیلات تکمیلی بوده و اکنون مدیریت توسعه
            انفورماتیک آموزش را در دانشگاه شهید بهشتی بر عهده دارد. اسلام ناظمی
            استادیار دانشکده مهندسی و علوم کامپیوتر دانشگاه شهید بهشتی است. از
            زمینه های تحقیقاتی ایشان می توان به مهندسی نرم افزارهای سلف-استار،
            توسعه سیستم های مقیاس وسیع، موتورهای جستجو، وب کاوی و کیفیت نرم
            افزارهای خودتطبیق اشاره کرد. اسلام ناظمی نویسنده و نویسنده همکار در
            بیش از ۹۰ مقاله در مجلات و کنفرانس های مختلف بوده است و تألیف ۱۰
            کتاب را، در زمینه های ریاضیات، مدیریت پروژه، مهندسی نرم افزار، کیفیت
            نرم افزار و تئوری بازی ها در کارنامه خود دارد.
          </div>
          <div className="flex flex-col gap-2">
            لینک های وابسته به دکتر ناظمی
            <ul className="list-disc list-inside">
              <li>
                <a className="hover:text-blue-600" href="">
                  Google Scholar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[3rem] text-center items-center justify-center flex border-[3px] border-gray-400">
        {lang("phdStudents")}
      </div>
      <div className="flex flex-col sm:w-full">
        {members.map(mapToProperField).map((studentInfo) => {
          return <StudentsProfile key={studentInfo.profile_id} studentInfo={studentInfo} />;
        })}
        {/* <StudentsProfile
        studentInfo={{
          // image:
          //   "http://selfstar.sbu.ac.ir/wp-content/uploads/ultimatemember/21/profile_photo-190.jpg?1520178315",
          firstName: "رحمان",
          lastName: "امین زاده",
          rule: "عضو کمیته اجرایی",
          email: "hes.behboudi@gmail.com",
          thesis:"ارائه میان‌افزاری جهت بهره‌گیری از سامانه‌های چندعامله خودسازمان‌ده در اینترنت اشیاء",
          cv: "امین رحمان‌زاده در سال ۱۳۸۷ در مقطع کارشناسی رشته مهندسی فناوری اطلاعات در دانشگاه تبریز پذیرفته شد. وی در سال ۱۳۹۱ در مقطع کارشناسی ارشد رشته مهندسی فناوری اطلاعات، گرایش معماری سازمانی در دانشگاه شهید بهشتی از طریق فرآیند استعداد درخشان پذیرفته شد. در این مقطع پس از آشنایی با آزمایشگاه سلف-* جذب این آزمایشگاه شده و عمده فعالیت‌های پژوهشی خود را بر روی استفاده از سامانه‌های چندعاملی خودسازمان‌ده متمرکز کرد. وی در سال ۱۳۹۳ از پایان نامه کارشناسی ارشد خود دفاع کرده و در سال ۱۳۹۴ مجدداً از طریق فرآیند استعداد درخشان وارد مقطع دکتری در دانشگاه شهید بهشتی شده و اکنون نیز در رشته مهندسی نرم‌افزار به فعالیت خود در آزمایشگاه سلف-* ادامه می‌دهد.",
        }}
      />       */}
      </div>
      <div className="h-[3rem] text-center items-center justify-center flex border-[3px] border-gray-400">
        {lang("masterStudents")}
      </div>
      <div className="h-[3rem] text-center items-center justify-center flex border-[3px] border-gray-400">
        {lang("graduated")}
      </div>
    </div>
  );
}
