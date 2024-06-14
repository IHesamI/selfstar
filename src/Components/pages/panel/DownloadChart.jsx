import {
  Bar,
  BarChart,
  CartesianAxis,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useLang } from "../../../hooks/useLang";
const data = [
  {
    type: "slide",
    sum: 2,
  },
  {
    type: "article",
    sum: 0,
  },
];
export default function DownloadChart() {
  const lang = useLang();
  return (
    <div>
      <span>{lang("allDownloads")}</span>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianAxis strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="sum"
            fill="#8884d8"
            // activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
    </div>
  );
}
