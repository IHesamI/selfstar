import { CiCirclePlus } from "react-icons/ci";
import { useLang } from "../../../../hooks/useLang";
import { func, number, string } from "prop-types";
import { useRef, useState } from "react";
import { editImageBlogPostItem } from "../../../../api/apis";
import { downlaodFile } from "../../../../Utils/downlaodFiles";

export default function BlogImageItem({item}) {

    const lang = useLang();
    const [image, setImage] = useState(item.content);
    const inputRef = useRef();

    const handleChoose = () => {
      inputRef.current.click();
    };
  
  const fileUploaded = (e) => {
    const files = e.target.files;
    const itemFile = files[0];
    editImageBlogPostItem(item, itemFile).then((newItem) =>
      setImage(newItem.data.content)
    );
    // setItems((items) =>
    //   items.map((item) => {
    //     if (item.id == newItem.id) return newItem;
    //     return item;
    //   })
    // );
  };

  return (
    <div>
      {image ? (
        <img src={downlaodFile(image)} />
      ) : (
        <div
          onClick={handleChoose}
          className="border-2 w-fit justify-center m-auto border-blue-500 text-blue-600 cursor-pointer rounded-lg p-4"
        >
          (
          <CiCirclePlus
            className="text-blue-500 w-[150px] h-[150px]"
            width={150}
          />
          <p>{lang("choosePicture")}</p>
          <input
            onChange={fileUploaded}
            type="file"
            className="hidden"
            ref={inputRef}
          />
          )
        </div>
      )}
    </div>
  );
}

BlogImageItem.propTypes = {
  item: {
    id: number,
    content: string,
    type: string,
  },
  setItems: func,
};

