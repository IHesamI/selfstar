import { useCallback, useRef, useState } from "react";
import { useLang } from "../../../hooks/useLang";
import Avatar from "../Avatar";
// import { useSelector } from "react-redux";
// import UserLink from "./UserLink";
// import AddLink from "./AddLink";
import UploadFile from "../../common/UploadFile";
// import FileDownloadIcon from "../../../assets/image/FileDownloadIcon";
// import DeleteModal from "../../common/DeleteModal";
import LinkContainer from "../../common/LinkContainer";
import { useDispatch, useSelector } from "react-redux";
import { delteAvatar, editProfile } from "../../../Store/userSlice";
import { downloadPrefixUlr } from "../../../config";
import { removeAvatar, removeResume } from "../../../api/apis";
import ResumeFile from "./ResumeFile";

export default function EditProfile() {
  
  const {profile}=useSelector((state) => state.user);
  const [links, setLinks] = useState(profile.links);
  const [avatarImg,setAvatarImg] = useState(profile.avatar_url);
  const [resumeUrl,setresumeUrl] = useState(profile.resume_url);
  const lang = useLang();
  const inputRef = useRef(null);
  const imageFile=useRef(null);
  const inputFeilds = useRef({});
  const dispatch = useDispatch();
  const [inputImageState, setinputImageState] = useState(null);
  const handleChangePicture = useCallback(() => {
    inputRef.current.click();
  }, []);
  const getProperField = (field) => {
    return profile[`${field}_${lang.langType}`];
  };
  const handleImageInput = (e) => {
    const files = e.target.files;
    if (files.length) {
      const file = files[0];
      imageFile.current = file;
      const result = URL.createObjectURL(file);
      setinputImageState(result);
    }
  };

  const deleteProfilePicture = async() => {
    setAvatarImg("");
    removeAvatar(profile.profile_id);
    dispatch(delteAvatar())
  };

  const deleteResume = async() => {
    setresumeUrl("");
    await removeResume(profile.profile_id);
    dispatch(deleteResume());
  };


  const handleChange = (key, value,must_add_lang) => {
    if (must_add_lang) key = `${key}_${lang.langType}`;
    inputFeilds.current = { ...inputFeilds.current, [key]: value };
  };

  const resumeRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...inputFeilds.current,
      links,
    };
    dispatch(
      editProfile({
        profile_id: profile.profile_id,
        payload: data,
        image: imageFile.current,
        resume: resumeRef.current,
      })
    );
  };

  return (
    <div className="flex flex-col px-[10rem] sm:px-1 medium:px-1 xlg:w-full xlg:px-2 mb-5">
      <div
        dir={lang.isRtl ? "rtl" : "ltr"}
        className="flex flex-row mt-10 m-auto xlg:justify-center xlg:gap-[4rem] medium:flex-col medium:gap-[4rem] sm:flex-col  sm:gap-[4rem] justify-start gap-[15rem] w-full"
      >
        <div className="flex flex-col text-center justify-between  sm:responsive-profile xlg:responsive-profile medium:responsive-profile">
          <div className="flex flex-col w-full gap-5">
            <Avatar
              imageInput={inputImageState}
              canDelete={deleteProfilePicture}
              image={avatarImg ? avatarImg : ""}
            />
            <button
              onClick={handleChangePicture}
              className="bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-400"
            >
              {lang("newProfilePicture")}
            </button>
          </div>

          <input
            ref={inputRef}
            onChange={handleImageInput}
            type="file"
            className="hidden"
          />
          <div className="flex flex-col w-full justify-between gap-5">
            <LinkContainer links={links} setLinks={setLinks} />
            <div className="flex flex-col w-full">
              <UploadFile
                restriction={"application/pdf"}
                title="uploadResume"
                inputFile={resumeRef}
              />
              {resumeUrl && (
                <ResumeFile
                  handleDelete={deleteResume}
                  resume_url={resumeUrl}
                />
              )}
            </div>
          </div>
        </div>
        <form
          className="w-full flex justify-center"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="w-max sm:w-full sm:m-auto flex flex-col gap-10 border-b-[1px] border-gray-600">
            <div className="dashboard-fields-row text-center w-full justify-center bg-gray-600 text-white rounded-t-lg py-1">
              {lang("ProfileTitle")}
            </div>

            <div className="dashboard-fields-row">
              <div className="dashboard-fields-container">
                <label className="required:" htmlFor="firstName">
                  {lang("name")}
                </label>
                <input
                  key={lang.langType}
                  id="firstName"
                  type="text"
                  defaultValue={getProperField("name")}
                  onChange={(e) => {
                    handleChange("name", e.target.value, true);
                  }}
                />
              </div>
              <div className="dashboard-fields-container">
                <label htmlFor="lastName">{lang("lastName")}</label>
                <input
                  key={lang.langType}
                  id="lastName"
                  type="text"
                  defaultValue={getProperField("last_name")}
                  onChange={(e) => {
                    handleChange("last_name", e.target.value, true);
                  }}
                />
              </div>
            </div>
            <div className="dashboard-fields-row">
              <div className="dashboard-fields-container w-full">
                <label htmlFor="email">{lang("email")}</label>
                <input
                  id="email"
                  type="email"
                  defaultValue={profile.email}
                  onChange={(e) => {
                    handleChange("email", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="dashboard-fields-row">
              <div className="dashboard-fields-container">
                <label htmlFor="password">{lang("newPassword")}</label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    handleChange("password", e.target.value);
                  }}
                />
              </div>
              <div className="dashboard-fields-container">
                <label htmlFor="newPassword">
                  {lang("newPasswordConfirm")}
                </label>
                <input id="newPassword" type="password" />
              </div>
            </div>
            <div className="dashboard-fields-row">
              <div className="dashboard-fields-container ">
                <label htmlFor="cv">{lang("educationHistory")}</label>
                <textarea
                  key={lang.langType}
                  defaultValue={getProperField("educationHistory")}
                  className="border-[1px] h-[6rem] p-1 text-sm resize-none border-gray-300 outline-none"
                  onChange={(e) => {
                    handleChange("educationHistory", e.target.value, true);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={lang.changeLang}
                className="w-fit text-white bg-blue-600 px-5 py-2 rounded-md mb-5 hover:bg-blue-700"
              >
                {lang("fillEnglishProfile")}
              </button>
              <button className="w-fit text-white bg-blue-600 px-5 py-2 rounded-md mb-5 hover:bg-blue-700">
                {lang("click")}
              </button>
            </div>
            {/* <div className="dashboard-fields-row text-center w-full justify-center bg-gray-600 text-white rounded-b-sm h-5"></div> */}
          </div>
        </form>
      </div>
    </div>
  );
}
