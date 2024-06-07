import { useRef } from "react";
import { useLang } from "../../hooks/useLang";

export default function UploadFile({
  title = "uploadFile",
  inputFile,
  restriction,
}) {
  const lang = useLang();
  const inputRef = useRef();
  const handleClick = (e) => {
    e.stopPropagation();
    inputRef.current.click();
  };
  const fileUploaded = (e) => {
    const files = e.target.files;
    if (files.length) inputFile.current = files[0];
  };
  return (
    <button
      onClick={handleClick}
      className="w-fit flex flex-row gap-4 bg-blue-600 p-3 rounded-lg items-center text-white hover:bg-opacity-85"
    >
      {lang(title)}
      <input
        ref={inputRef}
        onChange={fileUploaded}
        accept={restriction ? restriction : "*"}
        className="hidden"
        type="file"
      />
      <svg
        fill="#ffffff"
        height="25px"
        width="25px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 384.97 384.97"
        xmlSpace="preserve"
      >
        <g>
          <g id="Upload">
            <path
              d="M372.939,264.641c-6.641,0-12.03,5.39-12.03,12.03v84.212H24.061v-84.212c0-6.641-5.39-12.03-12.03-12.03
			S0,270.031,0,276.671v96.242c0,6.641,5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03v-96.242
			C384.97,270.019,379.58,264.641,372.939,264.641z"
            />
            <path
              d="M117.067,103.507l63.46-62.558v235.71c0,6.641,5.438,12.03,12.151,12.03c6.713,0,12.151-5.39,12.151-12.03V40.95
			l63.46,62.558c4.74,4.704,12.439,4.704,17.179,0c4.74-4.704,4.752-12.319,0-17.011l-84.2-82.997
			c-4.692-4.656-12.584-4.608-17.191,0L99.888,86.496c-4.752,4.704-4.74,12.319,0,17.011
			C104.628,108.211,112.327,108.211,117.067,103.507z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </g>
      </svg>
    </button>
  );
}
