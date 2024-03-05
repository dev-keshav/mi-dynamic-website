"use client"
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const TreeChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data) {
      // Handle the case where data is not defined
      return;
    }

    const width = 928;
    const marginTop = 10;
    const marginRight = 10;
    const marginBottom = 10;
    const marginLeft = 40;

    const root = d3.hierarchy(data);
    
    if (!root.children) {
      // Handle the case where root.children is not defined
      return;
    }

    const dx = 10;
    const dy = (width - marginRight - marginLeft) / (1 + root.height);

    const tree = d3.tree().nodeSize([dx, dy]);
    const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

    const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", dx)
      .attr("viewBox", [-marginLeft, -marginTop, width, dx])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; user-select: none;");

    const gLink = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5);

    const gNode = svg.append("g")
      .attr("cursor", "pointer")
      .attr("pointer-events", "all");

    function update(event, source) {
      // ... (remaining code from the update function)
    }

    root.x0 = dy / 2;
    root.y0 = 0;
    root.descendants().forEach((d, i) => {
      d.id = i;
      d._children = d.children;
      if (d.depth && d.data.name.length !== 7) d.children = null;
    });

    update(null, root);

    svgRef.current.appendChild(svg.node());

    return () => {
      // Cleanup logic if needed
    };
  }, [data]);

  return <div ref={svgRef}></div>;
};

export default TreeChart;
