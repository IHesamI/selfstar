import { useRef, useState } from "react";
import { useLang } from "../../../../hooks/useLang"
import { CiCirclePlus } from "react-icons/ci";
import { blogPostItemsType, downloadPrefixUlr } from "../../../../config";
import BlogImageItem from "./BlogImageItem";
import BlogTextItem from "./BlogTextItem";
import { createBlogPostItem, removeFile, removePostItem, updateBlogPost, uploadPostImage } from "../../../../api/apis";
import { bool } from "prop-types";
import { downlaodFile } from "../../../../Utils/downlaodFiles";
import { MdOutlineCancel } from "react-icons/md";

/**
 * @param {Object} param0 
 * @param {{
 * id:string
 * thubmnail?:string 
 * title?:string 
 * enTitle?:string 
 * items:[]
 * }} param0.blogPost 
 * @param {booelan} param0.isEngEdit
 * */ 

export default function AddBlogPost({blogPost,isEngEdit}) {

  const lang = useLang();

  const renderByisEngDict = (isEngItem, isNotItem) =>
    isEngEdit ? isEngItem : isNotItem;

  const [postItems, setPostItems] = useState(blogPost.items ?? []);
  const [thumbnail,setThumbnail]=useState(blogPost.thubmnail);

  const addNewItem = async (type) => {
    const newItem = (await createBlogPostItem(blogPost.id, type)).data;
    setPostItems([...postItems, newItem]);
  };
  const handleNewImageItem = async () => {
    addNewItem(blogPostItemsType.image);
  };

  const handleNewTextItem = async () => {
    addNewItem(blogPostItemsType.text);
  };

  const blogPostImage = useRef(null);
  const uploadImage =async (e) => {
    const files = e.target.files;
    const itemFile = files[0];
   const newPost = (await uploadPostImage(blogPost, itemFile)).data;
   setThumbnail(newPost.thubmnail);
  };
  
  const hanldeClick = () => {
    blogPostImage.current.click();
  };

const handleTitleChange = (e) => {
    console.error(blogPost);
  updateBlogPost({
    id: blogPost.id,
    [renderByisEngDict("enTitle" , "title")]: e.target.value,
  });
};
const handleDeleteItem = async (itemId) => {
  await removePostItem(itemId);
  setPostItems((state) => state.filter((item) => item.id != itemId));
};
    const deleteImage =async () => {
        await removeFile(thumbnail);
        updateBlogPost({ ...blogPost, thubmnail: null });
        setThumbnail(null);
    };

    return (
      <div className="flex flex-col gap-5 mb-5 w-[90%]">
        <h2 className="mb-5">{lang("addBlogPost")}</h2>
        <div className="flex flex-col justify-center gap-3 border-b-[1px] border-gray-400 pb-2">
          <div className="self-center flex flex-row w-full gap-3">
            <label className="text-nowrap" htmlFor="">{renderByisEngDict(lang('enTitle'),lang("title"))} :</label>
            <input
              className="border-[1px] required border-gray-400 px-1 outline-none w-[96%] h-fit rounded-sm"
              type="text"
              onChange={handleTitleChange}
              defaultValue={isEngEdit ? blogPost["enTitle"] : blogPost["title"]}
              placeholder="عنوان پست"
            />
          </div>
          {thumbnail ? (
            <img className="cursor-pointer" onDoubleClick={deleteImage} src={downlaodFile(thumbnail)} alt="" />
          ) : (
            <div
              onClick={hanldeClick}
              className="border-2 w-fit justify-center m-auto border-blue-500 text-blue-600 cursor-pointer rounded-lg p-4"
            >
              <input
                ref={blogPostImage}
                onChange={uploadImage}
                type="file"
                className="hidden"
              />
              <CiCirclePlus
                className="text-blue-500 w-[150px] h-[150px]"
                width={150}
              />
              <p>{lang("addMainImage")}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 w-full ">
          {postItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-1 gap-3 border-[1px] border-gray-200 rounded-lg"
            >
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="text-red-500 flex flex-row  justify-end"
              >
                {/* {lang("delete")} */}
                <MdOutlineCancel />
              </button>
              {item?.type == blogPostItemsType.image ? (
                <BlogImageItem item={item}  />
              ) : (
                <BlogTextItem item={item} isEngEdit={isEngEdit} />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3">
          <button
            onClick={handleNewTextItem}
            className="w-fit bg-blue-500 p-3 text-white rounded-md flex flex-row gap-1"
          >
            {lang("addTextBlogPost")}
          </button>

          <button
            onClick={handleNewImageItem}
            className="w-fit bg-blue-500 p-3 text-white rounded-md flex flex-row gap-1"
          >
            {lang("addImageBlogPost")}
          </button>
        </div>
      </div>
    );
}

AddBlogPost.propTypes = {
  blogPost: {},
  isEngEdit: bool,
};