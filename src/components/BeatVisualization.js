import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { subscribe, unsubscribe } from '../console-monkey-patch';

function BeatVisualization() {
    const svgRef = useRef();
    const [logData, setLogData] = useState([]);

    useEffect(() => {
        const handleD3Data = (event) => {
            setLogData(event.detail);
        };

        subscribe('d3Data', handleD3Data);
        return () => unsubscribe('d3Data', handleD3Data);
    }, []);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        svg.append("rect")
            .attr("width", 400)
            .attr("height", 550)
            .attr("fill", "#1a1a1a")
            .attr("stroke", "#4a90e2")
            .attr("stroke-width", 2)
            .attr("rx", 8);

        const colors = ["#ff4444", "#44ff44", "#4444ff", "#ffaa44", "#ff44ff", "#44ffff"];

        colors.forEach((color, i) => {
            svg.append("rect")
                .attr("class", `bar-${i}`)
                .attr("x", 30 + i * 60)
                .attr("y", 530)
                .attr("width", 40)
                .attr("height", 0)
                .attr("fill", color)
                .attr("rx", 4);
        });

        const interval = setInterval(() => {
            if (logData.length > 0) {
                const dataLength = logData.length;
                const step = Math.max(1, Math.floor(dataLength / 6));

                colors.forEach((color, i) => {
                    const index = Math.min(i * step, dataLength - 1);
                    const value = logData[index];

                    const numericValue = parseFloat(value) || 0;
                    const normalized = Math.abs(numericValue % 100);
                    const height = (normalized / 100) * 450 + 50;

                    svg.select(`.bar-${i}`)
                        .attr("y", 530 - height)
                        .attr("height", height);
                });
            }
        }, 50);

        return () => clearInterval(interval);
    }, [logData]);

    return (
        <div className="d3-visualization">
            <h5 className="text-secondary mb-3 fw-bold text-center">
                <i className="fas fa-terminal me-2 text-success"></i>
                    Beat Visualization
            </h5>
            <svg ref={svgRef} width="400" height="550"></svg>
        </div>
    );
}

export default BeatVisualization;
