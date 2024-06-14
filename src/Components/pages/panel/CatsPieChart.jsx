import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import { useLang } from "../../../hooks/useLang";

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value,type } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={'#00ff00'}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={'#00ff00'}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={'#00ff00'} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={'#00ff00'} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#ff0000">{`${type}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">

        </text>
      </g>
    );
  };


export default function CatsPieChart({ data }) {
  const [activeIndex, setactiveIndex] = useState(0);
  const lang = useLang();
  const onPieEnter = (_, index) => {
    setactiveIndex(index);
  };
  return (
    <div>
      <span>{lang('allCats')}</span>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <PieChart width={400} height={400}>
        <Pie
          onMouseEnter={onPieEnter}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          dataKey="count"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}
