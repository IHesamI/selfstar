import React from "react";
import { useLang } from "../../../../hooks/useLang";
import { editTabs } from "../../../../config";
import homePage from "../../../../assets/image/homepage.svg";
import footer from "../../../../assets/image/footer.svg";
import aboutUs from "../../../../assets/image/aboutUs.svg";
import members from "../../../../assets/image/members.svg";
import PanelTabButton from "../../panel/PanelTabButton";
export default function DefaultTab({handleSelectTab}) {
    const lang=useLang();
    return (
    <div className="flex flex-row w-full justify-center my-5">
      <div className="flex flex-wrap justify-center items-center w-full gap-5 basis-1/3 fill-gray-500">
        <PanelTabButton
          title={lang("editHomePage")}
          imgSrc={homePage}
          alt={"پروفایل کاربر سامانه سلف استار"}
          handleSelectTab={handleSelectTab}
          tab={editTabs.homepage}
        />
        <PanelTabButton
          title={lang("editAboutUs")}
          imgSrc={aboutUs}
          alt={"پایان نامه ها و مقالات سامانه سلف استار"}
          handleSelectTab={handleSelectTab}
          tab={editTabs.aboutUs}
        />
        <PanelTabButton
          title={lang("editMembers")}
          imgSrc={members}
          alt={"رویداد ها و سمینار های خود تطبیقی , سامانه سلف استار"}
          handleSelectTab={handleSelectTab}
          tab={editTabs.members}
        />
        <PanelTabButton
          title={lang("editFooter")}
          imgSrc={footer}
          alt={"مقالات  سامانه سلف استار"}
          handleSelectTab={handleSelectTab}
          tab={editTabs.footer}
        />
      </div>
    </div>
  );
}
