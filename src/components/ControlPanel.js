import React from "react";

function ControlPanel({ onPlay, onStop, onProcess, onProcessAndPlay }) {
    return (
        <div className="control-panel">
            <button id="play" onClick={onPlay}>Play</button>
            <button id="stop" onClick={onStop}>Stop</button>
            <button id="process" onClick={onProcess}>Process</button>
            <button id="process_play" onClick={onProcessAndPlay}>Process & Play</button>
        </div>
    );
}

export default ControlPanel;