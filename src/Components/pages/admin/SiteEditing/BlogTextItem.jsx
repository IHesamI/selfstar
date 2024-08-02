// import { Editor ,EditorState} from "draft-js";
import { bool, number, string } from "prop-types";
import {  useRef, useState } from "react";
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnStyles, BtnUnderline, BtnUndo, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from "react-simple-wysiwyg";
import {editTextBlogPostItem } from "../../../../api/apis";


export default function BlogTextItem({ item, isEngEdit }) {
  const renderByisEngDict = (isEngItem, isNotItem) =>
    isEngEdit ? isEngItem : isNotItem;
  const [content, setcontent] = useState(renderByisEngDict(item.engcontent,item.content) || "");
  const editValueInput = useRef("");

  const handleChange = (newContent) => {
    editTextBlogPostItem({
      ...item,
      [renderByisEngDict("engcontent","content")]: newContent,
    });
    setcontent(newContent);
  };

  return (
    <EditorProvider>
      <Editor
        className="w-full overflow-hidden"
        value={content}
        onChange={(e) => {
          editValueInput.current = e.target.value;
          handleChange(editValueInput.current);
          //   setcontent(e.target.value);
        }}
        aria-placeholder="hello"
      >
        <Toolbar>
        <BtnUndo />
          <BtnRedo />
          <Separator />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
          <BtnClearFormatting />
          <HtmlButton />
          <Separator />
          <BtnStyles />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}

BlogTextItem.propTypes  = {
    item:{
        id:number,
        content:string,
        type:string,
    },
    isEngEdit:bool,
}

