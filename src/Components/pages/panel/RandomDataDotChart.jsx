import { scaleLinear, scaleLog, scaleSqrt, scaleOrdinal } from "@visx/scale";
import { extent, format } from "d3";
import { Circle } from "@visx/shape";
import { Group } from "@visx/group";
import { Axis, AxisLeft } from "@visx/axis";
import { GridColumns } from "@visx/grid";
import { LegendOrdinal } from "@visx/legend";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { useTooltip, TooltipWithBounds, defaultStyles } from "@visx/tooltip";
import { useRef } from "react";
const colors=["orange", "blue", "pink", "purple", "green"];
const ScatterPlot = ({
    results,
  data = wbData,
  width = 800,
  height = 600,
  margin = { top: 30, left: 60, right: 40, bottom: 50 },
}) => {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const x = (d) => d.data[1];
  const y = (d) => d.data[0];
  const radius = (d) => 0.4;
  const color = (d) => colors[d.cluster];

  const xScale = scaleLog({
    range: [margin.left, innerWidth + margin.left],
    domain: extent(data, x),
  });

  const yScale = scaleLinear({
    range: [innerHeight + margin.top, margin.top],
    domain: extent(data, y),
    nice: true,
  });

  const colorScale = scaleOrdinal({
    range: ["#ff8906", "#3da9fc", "#ef4565", "#7f5af0", "#2cb67d"],
    domain: [...new Set(data.map(color))],
  });

  const rScale = scaleSqrt({
    range: [1, 2],
    domain: extent(data, radius),
  });

  // Tooltip handlers
  const {
    tooltipData,
    tooltipOpen,
    tooltipTop = 0,
    tooltipLeft = 0,
  } = useTooltip();

  const svgRef = useRef(null);

  // Sort the data
  //   data = data.sort((a, b) => b.population - a.population);

  return (
    <>
      <LegendOrdinal
        scale={colorScale}
        direction="row"
        shape="circle"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      />
      <svg width={width} height={height} ref={svgRef}>
        <rect
          x={margin.left}
          y={margin.top}
          width={innerWidth}
          height={innerHeight}
          fill="transparent"
        />
        <AxisLeft scale={yScale} left={margin.left} label="Life expectancy" />
        <Axis
          orientation="top"
          scale={xScale}
          top={margin.top}
          tickFormat={format("$~s")}
          numTicks={2}
          tickStroke="transparent"
          stroke="transparent"
        />
        <Axis
          orientation="bottom"
          scale={xScale}
          top={innerHeight + margin.top}
          tickFormat={format("$~s")}
          numTicks={2}
          label="GDP per cap"
        />
        <GridColumns
          top={margin.top}
          scale={xScale}
          height={innerHeight}
          strokeOpacity={0.8}
          pointerEvents="none"
          numTicks={2}
        />
        <Group pointerEvents="none">
          {data.map((point, i) => (
            <Circle
              key={i}
              cx={xScale(x(point))}
              cy={yScale(y(point))}
              r={rScale(radius(point))}
              fill={colorScale(color(point))}
              fillOpacity={0.8}
              stroke={
                tooltipData === point ? "black" : colorScale(color(point))
              }
            />
          ))}
        </Group>
      </svg>
      {tooltipOpen &&
        tooltipData &&
        tooltipLeft != null &&
        tooltipTop != null && (
          <TooltipWithBounds
            left={tooltipLeft}
            top={tooltipTop + 10}
            style={defaultStyles}
          >
            <h3
              style={{
                color: colorScale(color(tooltipData)),
                paddding: 0,
                margin: 0,
              }}
            >
              {tooltipData.country}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr",
              }}
            >
              <div>GDP per cap</div>
              <div style={{ textAlign: "right" }}>{`${format("$.2~s")(
                x(tooltipData)
              )}`}</div>
              <div>y</div>
              <div style={{ textAlign: "right" }}>
                {Math.round(y(tooltipData))}
              </div>
              <div>x</div>
              <div style={{ textAlign: "right" }}>{`${Math.round(
                radius(tooltipData)
              )}m`}</div>
            </div>
          </TooltipWithBounds>
        )}
    </>
  );
};

const ScatterPlotWrapper = ({ data }) => {
  console.error(data);
  return (
    <ParentSize>
      {({ width }) => (
        <ScatterPlot width={width} data={data} />
      )}
    </ParentSize>
  );
};
export default ScatterPlotWrapper;
