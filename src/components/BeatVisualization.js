import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function BeatVisualization() {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        // Background
        svg.append("rect")
            .attr("width", 400)
            .attr("height", 200)
            .attr("fill", "#1a1a1a")
            .attr("stroke", "#4a90e2")
            .attr("stroke-width", 2)
            .attr("rx", 8);


        const colors = ["#ff4444", "#44ff44", "#4444ff", "#ffaa44", "#ff44ff", "#44ffff"];

        colors.forEach((color, i) => {
            svg.append("rect")
                .attr("class", `bar-${i}`)
                .attr("x", 30 + i * 60)
                .attr("y", 180)
                .attr("width", 40)
                .attr("height", 0)
                .attr("fill", color)
                .attr("rx", 4);
        });

        
        let counter = 0;

        const interval = setInterval(() => {
            counter += 1;

            colors.forEach((color, i) => {
                const time = counter + i * 10;
                const height = Math.abs(Math.sin(time / 5)) * 120 + 20;

                svg.select(`.bar-${i}`)
                    .attr("y", 180 - height)
                    .attr("height", height);
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="d3-visualization">
            <h5 className="text-secondary mb-3 fw-bold text-center">
                <i className="fas fa-terminal me-2 text-success"></i>
                    Beat Visualization
            </h5>
            <svg ref={svgRef} width="400" height="200"></svg>
        </div>
    );
}

export default BeatVisualization;
