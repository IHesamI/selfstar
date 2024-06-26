import React from "react";
import Contents from "../common/MainPageContents";
import "../section.css";
export default function Home() {
  return (
    <div className="flex flex-wrap section-padding gap-5 py-10">
      <Contents
        title={"تاریخچه خود تطبیقی"}
        description={
          "در سال ۲۰۰۱ آقای هورن برای اولین بار به مبحث محاسبات خودمختار پرداخت. در این مقاله، اعلام شد که با توجه به پیچیدگی روز­افزون سامانه‌­های فناوری اطلاعات، نیاز به سازوکاری است که سامانه خودش بتواند بدون نیاز به دخالت انسان در برابر تغییرات محیطی واکنش نشان داده و به صورت خودمختار خود را تطبیق دهد. پس از آن و در سال ۲۰۰۳، شرکت IBM در یک مانیفست در رابطه با محاسبات خودمختار، یک معماری مرجع برای سامانه­‌های دارای این ویژگی ارائه کرد و نام «سامانه‌­های خودتطبیق» را بر آن نهاد…"
        }
        link={"#"}
      />
      <Contents
        title={"خودتطبیقی چیست؟"}
        description={
          "در منابع کلاسیک سیستم خودتطبیق چنین تعریف شده است: “یک سیستم خودتطبیق رفتار خود را ارزیابی نموده و هنگامی که این رفتارها در جهت اهداف تعیین شده برای نرم افزار نباشند و یا کارایی بالاتری ممکن باشد، این رفتارها را تغییر می دهد.” در یک تعریف وسیع تر سیستم خودتطبیق سیستمی است که رفتار خود را در پاسخ به تغییرات روی داده در محیط عملیاتی خود تغییر می دهد. همچنین در اینجا منظور از محیط عملیاتی هر چیزی مانند ورودی‌های کاربر نهایی، ابزار سخت افزاری، حسگرها و ابزار برنامه است که برای سیستم نرم افزاری قابل مشاهده باشد…"
        }
        link={"#"}
      />
    </div>
  );
}
