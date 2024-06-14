import { useEffect, useRef, useState } from "react"
import { getCategoriesCount, getCategoriesDownload, getLogs } from "../../../api/apis";
import CatsPieChart from "./CatsPieChart";
import DownloadChart from "./downloadChart";
function convertToProperData(item){
return { ...item, count: parseInt(item.count) }
}
export default function ChartLogs() {
  const datas = useRef({});
  const [logsData, setLogsData] = useState([]);
  const [catsData, setcatsData] = useState([]);
  const [downloadsData, setDownloadsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await getLogs();
      if (response.status == 200) {
        let data = response.data;
        setLogsData(data);
        datas.current.logsData = data;
        
        response = await getCategoriesCount();
        data = response.data.map(convertToProperData);
        setcatsData(data);
        datas.current.catsData = data;

        response = await getCategoriesDownload();
        data = response.data.map(convertToProperData);
        setDownloadsData(data);
        datas.current.downloadsData = data;
      }
    };
    if (!datas.current.length) fetchData();
    else {
      setLogsData(datas.current.logsData);
      setcatsData(datas.current.catsData);
    }
  }, []);
  

  return (
    <div className="flex flex-col w-full mt-4 px-10">
      <CatsPieChart data={catsData}/>
      <DownloadChart data ={downloadsData}/>
    </div>
  )
}
