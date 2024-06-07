import { createSlice } from "@reduxjs/toolkit"



const initialState = {
  footer: {
    fa: `آزمایشگاه سلف‌استار با هدف ارائه چارچوب، استاندارد و بسترهاي
          نرم‌افزاري خودتطبیق براي سازمان‌ها و شرکت‌هاي دولتي توسط تني چند از
          اساتيد، فارغ‌التحصيلان و دانشجويان دانشکده مهندسی و علوم کامپيوتر
          دانشگاه شهيد بهشتي که در زمينه سیستم های خودتطبیق فعاليت مي‌نمايند،
          شکل گرفته است.`,
    en: `Selfstar Lab was formed with the aim of providing self-adaptive software frameworks, standards and platforms for government organizations and companies by many professors, graduates and students of the Faculty of Engineering and Computer Science of Shahid Beheshti University who work in the field of self-adaptive systems.`,
  },
  aboutUs: {
    fa: [
      `گروه تحقیقاتی سلف‌استار از سال ۱۳۸۷ با هدف ارائه چارچوب، استاندارد و
        بسترهای نرم‌افزاری خودتطبیق برای سازمان‌ها و شرکت‌های دولتی توسط تنی چند
        از اساتید، فارغ‌التحصیلان و دانشجویان دانشکده برق و کامپیوتر دانشگاه
        شهید بهشتی که در زمینه سیستم های خودتطبیق فعالیت می‌نمایند، شکل گرفته
        است. این گروه به سرپرستی دکتر اسلام ناظمی در دانشکده مهندسی و علوم
        کامپیوتر دانشگاه شهید بهشتی در حال فعالیت است. در حال حاضر تعدادی از
        اعضای گروه فارغ‌التحصیل شده و تعدادی دیگر مشغول فعالیت هستند که جزییات
        آن‌ها از اینجا در دسترس است. به طور کلی زمینه‌های فعالیت گروه در شکل زیر
        قابل مشاهده است:`,
      `همچنین گروه تخقیقاتی سلف‌‌استار خدمات تجاری و آکادمیک مختلفی را نیز
        ارائه می‌دهد که اهم آن‌ها در شکل زیر قابل ملاحظه است:`,
    ],
    en: [
      `Since 2007, the Selfstar research group has been formed by several professors, graduates and students of Shahid Beheshti University's Faculty of Electrical Engineering and Computers, who work in the field of self-adaptive systems, with the aim of providing a framework and standard for self-adaptive software Websters for public organizations and companies. This group is working under the supervision of Dr. Eslam Nazemi in the Faculty of Engineering and Computer Science of Shahid Beheshti University. Currently, some members of the group have graduated and some others are working, whose details are available here. In general, the group's activities can be seen in the following figure:`,
      `Selfstar Research Group also provides various commercial and academic services, the most important of which can be seen in the following figure:`,
    ],
  },
  members: {
    title: {
      fa: `دکتر اسلام ناظمی سرپرست گروه تحقیقاتی خود تطبیقی`,
      en: `Dr. Eslam Nazemi, head of the comparative research group`,
    },
    description: {
      fa: `اسلام ناظمی در سال ۱۳۳۳ در شهر سراب در ایران متولد شد. وی مدرک کارشناسی خود را در ریاضیات کاربردی و تحقیق در عملیات از مدرسه عالی برنامه ریزی و کاربرد کامپیوتر، تهران، ایران، در سال ۱۳۵۶، مدرک کارشناسی ارشد خود را در رشته های مهندسی سیستم و اقتصاد سیستم به ترتیب در سال های ۱۳۶۶ و ۱۳۷۵ و نیز مدرک دکتری خود را در رشته مهندسی صنایع و فناوری اطلاعات در سال ۱۳۸۴ دریافت کرد. اسلام ناظمی از سال ۱۳۵۷ عضو هیئت علمی مدرسه عالی برنامه ریزی و کاربرد کامپیوتر بوده و از سال ۱۳۶۵ تا کنون عضو هیئت علمی دانشگاه شهید بهشتی تهران است. ایشان معاون آموزش و تحصیلات تکمیلی بوده و اکنون مدیریت توسعه انفورماتیک آموزش را در دانشگاه شهید بهشتی بر عهده دارد. اسلام ناظمی استادیار دانشکده مهندسی و علوم کامپیوتر دانشگاه شهید بهشتی است. از زمینه های تحقیقاتی ایشان می توان به مهندسی نرم افزارهای سلف-استار، توسعه سیستم های مقیاس وسیع، موتورهای جستجو، وب کاوی و کیفیت نرم افزارهای خودتطبیق اشاره کرد. اسلام ناظمی نویسنده و نویسنده 
همکار در بیش از ۹۰ مقاله در مجلات و کنفرانس های مختلف بوده است و تألیف ۱۰ کتاب را، در زمینه های ریاضیات، مدیریت پروژه، مهندسی نرم افزار، کیفیت نرم افزار و تئوری بازی ها در کارنامه خود دارد.`,
      en: `Eslam Nazemi was born in 1333 in the city of Sarab in Iran. He received his bachelor's degree in applied mathematics and operations research from the Higher School of Computer Planning and Application, Tehran, Iran, in 1996, and his master's degree in system engineering and system economics in 1998 and 1999, respectively. He also received his doctorate degree in the field of industrial engineering and information technology in 2004. Eslam Nazemi has been a member of the academic faculty of the Higher School of Computer Programming and Application since 1998, and has been a member of the academic faculty of Shahid Beheshti University of Tehran since 1998. He was the vice president of education and graduate education and now he is in charge of the development of education informatics in Shahid Beheshti University. Eslam Nazemi is an assistant professor at Shahid Beheshti University, Faculty of Engineering and Computer Science. His research areas include self-star software engineering, large-scale system development, search engines, web mining, and self-adaptive software quality. Eslam Nazemi is a writer and author
He has contributed more than 90 articles in various magazines and conferences and has authored 10 books in the fields of mathematics, project management, software engineering, software quality, and game theory.`,
    },
    links: [
      {
        title: "",
        link: "https://scholar.google.com/citations?hl=en&user=0sn-HWgAAAAJ",
      },
    ],
  },
};
const name= "site";

export const siteSlice = createSlice({
  name,
  initialState,
  // extraReducers: (builder) => {
  // },
});