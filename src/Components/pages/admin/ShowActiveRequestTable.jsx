import { useLang } from "../../../hooks/useLang";

export default function ShowActiveRequestTable({ headers }) {
  const lang = useLang();
  return (
    <>
      <table className="table max-h-[35rem]">
        <thead>
          <tr className="border-[1px] border-gray-500 border-collapse">
            {headers.map((item) => (
              <th
                key={item}
                className="text-start border-[1px] p-1 border-gray-300 border-collapse "
              >
                {lang(item)}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </>
  );
}
