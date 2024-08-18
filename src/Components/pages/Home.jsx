import { useEffect, useState } from "react";
import Contents from "../common/MainPageContents";
import "../section.css";
import { getActiveBlogPosts } from "../../api/apis";
// import { useLang } from "../../hooks/useLang";
export default function Home() {
  const [blogPosts, setblogPosts] = useState([]);
  // const lang=useLang();
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const result = (await getActiveBlogPosts()).data;
      setblogPosts(result);
    };
    fetchBlogPosts();
  }, []);
  
  return (
    <div className="flex flex-wrap section-padding gap-5 py-10">
      {blogPosts.map((item) => (
        <Contents item={item} />
      ))}
    </div>
  );
}
