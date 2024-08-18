import { useEffect, useRef, useState } from "react";
import {
  getCategoriesCount,
  getCategoriesDownload,
  getRandomData,
} from "../../../api/apis";
import CatsPieChart from "./CatsPieChart";
import DownloadChart from "./DownloadChart";
// import { ParentSize } from "@visx/responsive";
import Chart from "./RandomDataDotChart";
import { useLang } from "../../../hooks/useLang";
function convertToProperData(item) {
  return { ...item, count: parseInt(item.count) };
}
export default function ChartLogs() {
  const lang = useLang();
  const datas = useRef({});
  const [logsData, setLogsData] = useState([]);
  const inputCountRef=useRef(null);
  const clusterSelectCount=useRef(null);
  const [catsData, setcatsData] = useState([]);
  const [downloadsData, setDownloadsData] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const handleRandomData = async () => {
    const result = (
      await getRandomData({
        dataCount: Math.min(inputCountRef.current.value || 200, 2000),
        clusters: clusterSelectCount.current.value || 3,
      })
    ).data;
    setRandomData(result);
  };
  useEffect(() => {
    const fetchData = async () => {
      // let response = await getLogs();
      // if (response.status == 200) {
        // let data = response.data;
        // setLogsData(data);
        // datas.current.logsData = data;

        let response = await getCategoriesCount();
        let data = response.data.map(convertToProperData);
        setcatsData(data);
        datas.current.catsData = data;

        response = await getCategoriesDownload();
        data = response.data.map(convertToProperData);
        setDownloadsData(data);
        datas.current.downloadsData = data;
      // }
    };
    if (!datas.current.length) fetchData();
    else {
      // setLogsData(datas.current.logsData);
      setcatsData(datas.current.catsData);
    }
  }, []);

  return (
    <div className="flex flex-col w-full mt-4 px-10">
      <CatsPieChart data={catsData} />
      <DownloadChart data={downloadsData} />
      <div className="flex flex-col">
        <h2>{lang("RandomModel")}</h2>
        <div className="flex flex-row gap-3 items-center mb-3">
          <label htmlFor="">
            {lang("clustersCount")}
            <select ref={clusterSelectCount} name="تعداد دسته ها" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3" selected>
                3
              </option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <input
            ref={inputCountRef}
            className="outline-none border-gray-400 border-[1px]  rounded-md"
            max={2000}
            type="number"
            placeholder={lang("dataPointsCount")}
          />
          <button
            className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg"
            onClick={handleRandomData}
          >
            {lang("click")}
          </button>
        </div>
      </div>
      {Boolean(randomData.length) && <Chart data={randomData} />}
    </div>
  );
}
