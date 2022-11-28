import React from "react";
import * as V from "victory";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const pieData = [
  { x: "AWS", y: 47 },
  { x: "AZ", y: 22 },
  { x: "GCP", y: 11 },
  { x: "Rest", y: 20 },
];

function Chart() {
  return (
    <>
      <VictoryChart domainPadding={20}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>

      <VictoryPie
        data={pieData}
        animate={{ duration: 2000 }}
        colorScale={["orange", "gold", "cyan", "navy"]}
        height={300}
      />
    </>
  );
}

export default Chart;
