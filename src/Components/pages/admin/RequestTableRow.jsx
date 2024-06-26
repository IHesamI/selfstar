import { formatTime } from "../../../Utils/timeUtil";

export default function RequestTableRow({ request, headers, index ,onSelect}) {
  
  return (
    <tr
      onClick={() => {
        onSelect(index);
      }}
      key={index}
      className="text-gray-700 cursor-pointer hover:bg-gray-300"
    >
      {headers.map((field) => (
        <td key={field} className={`${field}`}>
          {field == "createdDate" ? formatTime(request[field]) : request[field]}
        </td>
      ))}
    </tr>
  );
}
