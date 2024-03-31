import React from "react";
import AddRequests from "./addRequests";
import RequestsTable from "../../common/RequestsTable";
import { Status } from "../../../config";

export default function NewRequest() {
  return (
    <div className="flex flex-col section-padding w-full pt-7 mb-6 gap-5">
      <AddRequests />
      <div className="max-h-[40rem] overflow-y-auto">
        <RequestsTable
          headers={["title", "description", "status", "action"]}
          data={[
            {
              title: "werwerewrewrwerewrewrewrwerewrwerewr مسنیبتسنمیبتسنمبتسم",
              description:
                "werwerwerewrwer ظمتسیبنمکسشیتبنمکستبکنمشیستبکم»تقثصهخقعصثewrewrewrwerwerwerخقعهصخثقعهخصثقعخصثعقخصسشتنبمکیستنمکبتمکشیسبتکمسشتبکمشیستکمبتسشم",
              status: 0,
            },
            {
              title: "ظشحق مسنیبتسنمیبتسنمبتسم",
              description:
                "ظمتسیبنمکسشیتبنمکستبکنمشیستبکم»تقثصهخقعصثخقعهصخثقعهخصثقعخصثعقخصسشتنبمکیستنمکبتمکشیسبتکمسشتبکمشیستکمبتسشم",
              status: 2,
            },
            {
              title: "ظشحق مسنیبتسنمیبتسنمبتسم",
              description:
                "ظمتسیبنمکسشیتبنمکستبکنمشیستبکم»تقثصهخقعصثخقعهصخثقعهخصثقعخصثعقخصسشتنبمکیستنمکبتمکشیسبتکمسشتبکمشیستکمبتسشم",
              status: 1,
            },
            {
              title: "ظشحق مسنیبتسنمیبتسنمبتسم",
              description:
                "ظمتسیبنمکسشیتبنمکستبکنمشیستبکم»تقثصهخقعصثخقعهصخثقعهخصثقعخصثعقخصسشتنبمکیستنمکبتمکشیسبتکمسشتبکمشیستکمبتسشم",
              status: 0,
            },
          ]}
        />
      </div>
    </div>
  );
}
