import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function SpeedVisualization({ speed }) {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); 

        const width = 200;
        
        
       
        const speedValue = speed === 'fast' ? 2 : speed === 'normal' ? 1 : 0.5;
        const barWidth = (speedValue / 2) * width;
        
       
        svg.append("rect")
            .attr("width", width)
            .attr("height", 20)
            .attr("fill", "#e0e0e0")
            .attr("rx", 10);
            
       
        svg.append("rect")
            .attr("width", barWidth)
            .attr("height", 20)
            .attr("fill", speed === 'fast' ? '#ff4444' : speed === 'normal' ? '#44ff44' : '#4444ff')
            .attr("rx", 10)
            .transition()
            .duration(500);

    }, [speed]);

    return (
        <div className="d3-visualization">
            <h6>Music Speed Visualization</h6>
            <svg ref={svgRef} width="200" height="60"></svg>
        </div>
    );
}

export default SpeedVisualization;