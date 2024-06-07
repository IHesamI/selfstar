import DeleteLink from "./DeleteLink";
import EditLink from "./EditLink";

export default function UserLink({ title, link,setLinks,index }) {
  return (
    <div className="flex flex-row justify-between hover:bg-gray-300  p-1">
      <a
        className="hover:text-blue-600 text-ellipsis overflow-hidden w-[80%]"
        href={link}
      >
        {title}
      </a>
      <div className="flex flex-row gap-1">
        <EditLink index={index} setLinks={setLinks} title={title} link={link} />
        <DeleteLink index={index} setLinks={setLinks} />
      </div>
    </div>
  );
}
