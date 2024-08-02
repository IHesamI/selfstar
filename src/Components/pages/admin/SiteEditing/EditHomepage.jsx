import { useEffect, useState } from "react";
import AddBlogPost from "./AddBlogPost";
import { createBlogPost, getAllBlogPosts, removeBlogPost, updateBlogPost } from "../../../../api/apis";
import { useLang } from "../../../../hooks/useLang";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";
import { RiEnglishInput } from "react-icons/ri";
import { homePageStateEnum } from "../../../../config";
export default function EditHomepage() {
  const [homePageState, setHomePageState] = useState({
    state: null,
    blogPost: null,
  });
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getAllBlogPosts();
      setBlogPosts(posts.data);
    };

    fetchData();
  }, []);
  const lang = useLang();

  const handleAddNewClick = async () => {
    const blogPost = (await createBlogPost()).data;
    setHomePageState({
      state: homePageStateEnum.edit,
      blogPost,
    });
  };
  const handleEditClicked =(id)=>{
    const blogPost = blogPosts.find(item=>item.id==id)
    setHomePageState({
      state: homePageStateEnum.edit,
      blogPost,
    });
  }
  const handleEditEnglishClicked =(id)=>{
    const blogPost = blogPosts.find(item=>item.id==id)
    setHomePageState({
      state: homePageStateEnum.editEng,
      blogPost,
    });
  }
  
  const handleDeleteBlogPost = (blogPostId) => {
    setBlogPosts((state) => state.filter((item) => item.id != blogPostId));
    removeBlogPost(blogPostId);
  };

  const handleCheckedChange = async (blogPost) => {
    const updatedBlogPost = { ...blogPost, isActive: !blogPost.isActive };
    setBlogPosts(
      blogPosts.map((item) => {
        if (item.id == blogPost.id) return updatedBlogPost;
        return item;
      })
    );
    await updateBlogPost(updatedBlogPost);
  };

  return (
    <div className="flex flex-col">
      {homePageState.blogPost ? (
        <AddBlogPost
          blogPost={homePageState.blogPost}
          isEngEdit={homePageState.state == homePageStateEnum.editEng}
        />
      ) : (
        <div className="flex flex-col gap-5">
          <button
            onClick={handleAddNewClick}
            className="w-fit bg-blue-500 p-3 text-white rounded-md flex flex-row"
          >
            {lang("addPost")}
          </button>
          <table className="w-[70%]">
            <thead>
              <tr className="border-[1px] border-gray-400">
                <th className="border-[1px] border-gray-300 text-right">
                  {lang("title")}
                </th>
                <th className="border-[1px] border-gray-300 text-right">
                  {lang("isActive")}
                </th>
                <th className="w-fit border-[1px] border-gray-300 text-right">
                  {lang("action")}
                </th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.isActive}
                      onChange={() => {
                        handleCheckedChange(item);
                      }}
                    />
                  </td>
                  <td className="w-fit">
                    <div className={"flex flex-row gap-3"}>
                      <button
                        onClick={() => {
                          handleDeleteBlogPost(item.id);
                        }}
                        title={lang("delete")}
                        className="text-red-500"
                      >
                        <FaRegTrashCan />
                      </button>
                      <button
                        onClick={() => handleEditClicked(item.id)}
                        title={lang("edit")}
                        className="text-yellow-400"
                      >
                        <FaPen />
                      </button>
                      <button
                        onClick={() => handleEditEnglishClicked(item.id)}
                        title={lang("editEng")}
                        className="text-blue-400"
                      >
                        <RiEnglishInput />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
