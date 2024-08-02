import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getBlogPost } from "../../api/apis";
import { downlaodFile } from "../../Utils/downlaodFiles";
import { useLang } from "../../hooks/useLang";
import { blogPostItemsType } from "../../config";
import parse from 'html-react-parser';
import noThumbnail from '../../assets/image/noThumbnail.png';
export default function BlogPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const lang=useLang();

    useEffect(() => {
        const fetchItem = async () => {
          const post = (await getBlogPost(id)).data;
          setPost(post);
        };
        fetchItem();
    }, []);

    return (
      <div
        dir={lang.isRtl ? "ltr" : "rtl"}
        className="flex flex-col w-full bg-gray-200 h-full"
      >
        <div className="w-[60%] bg-white self-center h-full py-4 px-3  overflow-y-auto ">
          {post && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-row-reverse text-blue-500">
                <h3>
                  {lang.renderbyLang(post.title, post.enTitle || post.title)}
                </h3>
              </div>
              <div className=" items-center flex justify-center">
                <img
                  className="w-full self-center h-[450px]"
                  src={
                    post.thubmnail ? downlaodFile(post.thubmnail) : noThumbnail
                  }
                  alt=""
                />
              </div>
              <div 
              dir={lang.isRtl ? "rtl" : "ltr"}
              className="flex flex-col w-full overflow-hidden gap-3">
                {post.items.map((item) => (
                  <>
                    {item?.type == blogPostItemsType.image ? (
                      <img key={item.id} src={downlaodFile(item.content)} />
                    ) : (
                      <p className="break-all" key={item.id}>
                        {parse(
                          lang.renderbyLang(
                            item.content,
                            item.engcontent || item.content
                          ) ?? ""
                        )}
                      </p>
                    )}
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
