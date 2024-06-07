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
const get_id = (item) => {
  switch(urlParam){
    case 'articles':
      return item.article_id
    case 'thesis':
      return item.thesis_id
    case 'slides':
      return item.slide_id
  }
};
  return (
    <div className={`category-children-container`}>
      {contents.map((item, index) => (
        <ContentsPreview
          key={index}
          title={item.title}
          publishedDate={formatTime(item.createAt)}
          categories={[urlParam]}
          description={item.description}
          link={`/${urlParam}/${get_id(item)}`}
        />
      ))}
    </div>
  );
}
