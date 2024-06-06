import { useEffect, useState } from "react"
import { getCategoriesByUrl } from "../../../api/apis";
import ContentsPreview from "./ContentsPreview";
import { formatTime } from "../../../Utils/timeUtil";

export default function CategoryList({ urlParam }) {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getCategoriesByUrl(urlParam);
      console.error(result.data);
      setContents(result.data);
    };
    fetchData();
  }, [urlParam]);

  return (
    <div className={`category-children-container`}>
      {contents.map((item, index) => (
        <ContentsPreview
          key={index}
          title={item.title}
          publishedDate={formatTime(item.createAt)}
          categories={[urlParam]}
          description={item.description}
          link={"/#/12"}
        />
      ))}
    </div>
  );
}
