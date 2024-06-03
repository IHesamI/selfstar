import React, { useCallback, useState } from "react";
import { editTabs } from "../../../../config";
import EditAboutUs from "./EditAboutUs";
import EditFooter from "./EditFooter";
import EditHomepage from "./EditHomepage";
import EditMembers from "./EditMembers";
import DefaultTab from "./DefaultTab";
import BackArrow from "../../../../assets/image/BackArrow";

export default function Index() {
  const [editTab, setEditTab] = useState(editTabs.aboutUs);
  const handleSelectTab = useCallback((tab) => {
    setEditTab(tab);
  }, []);

  const chooseTab = () => {
    switch (editTab) {
      case editTabs.aboutUs:
        return <EditAboutUs />;
      case editTabs.footer:
        return <EditFooter />;
      case editTabs.homepage:
        return <EditHomepage />;
      case editTabs.members:
        return <EditMembers />;
    }
  };
  const handleBack = useCallback(() => {
    setEditTab(null);
  }, []);
  const renderTab = () => {
    if (editTab) {
      return (
        <div className="w-full flex flex-col section-padding mt-5">
          <button onClick={handleBack} className="self-end text-gray-300 mb-10">
            <BackArrow size={20} color={'#5e5e5e'} />
          </button>
          {chooseTab()}
        </div>
      );
    }
    return <DefaultTab handleSelectTab={handleSelectTab} />;
  };

  return <>{renderTab()}</>;
}
