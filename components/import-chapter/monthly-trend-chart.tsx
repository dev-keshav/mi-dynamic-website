"use client"

import { useState } from "react"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"

function formatter(params: any) {
  console.log(params)

  const validationOn = params.datum[params.yKey]

  return {
    shape: "triangle",
  }
}

const importGraphData = {
  autoSize: true,
  title: { text: "Value USD Million", color: "#000" },

  data: [
    {
      month: "",
      quantity: "",
    },
    {
      month: "Jun 2019",
      quantity: 34,
    },
    {
      month: "Jul 2019",
      quantity: 61,
    },
    {
      month: "Aug 2019",
      quantity: 71,
    },
    {
      month: "Sep 2019",
      quantity: 55,
    },
    {
      month: "Oct 2019",
      quantity: 50,
    },
    {
      month: "Nov 2019",
      quantity: 65,
    },
    {
      month: "Dec 2019",
      quantity: 85,
    },

    {
      month: "Jan 2020",
      quantity: 68,
    },
    {
      month: "Feb 2020",
      quantity: 28,
    },
    {
      month: "Mar 2020",
      quantity: 34,
    },
    {
      month: "Apr 2020",
      quantity: 24,
    },
    {
      month: "May 2020",
      quantity: 44,
    },
  ],

  background: {
    visible: false,
  },

  axes: [
    {
      type: "category",
      position: "bottom",
      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
      label: {
        color: "#000",
      },
    },
    {
      type: "number",
      position: "left",
      tick: {
        interval: 20,
      },
      gridStyle: [
        {
          stroke: false,
        },
        {
          stroke: false,
        },
      ],
      label: {
        color: "#000",
      },
    },
  ],

  series: [
    {
      xKey: "month",
      yKey: "quantity",
      stroke: "#42A09F",
      marker: {
        shape: "triangle",
        stroke: "#6B8F24",
        strokeWidth: 3,
        fill: "#6B8F24",

        ...formatter,
      },
    },
  ],
}

const MonthlyTrendLineChart = () => {
  const [options, setOptions] = useState(importGraphData)

  return <AgChartsReact options={options as unknown as AgChartOptions} />
}

export default MonthlyTrendLineChart
