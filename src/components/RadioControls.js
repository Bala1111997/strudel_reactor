import React from "react";

function RadioControls({ selectedOption, onRadioChange }) {
    return (
        <div className="col-md-4">
            <h5>Speed Control</h5>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="speedRadioGroup" 
                    id="speed-fast"
                    value="fast"
                    checked={selectedOption === 'fast'}
                    onChange={(e) => onRadioChange(e.target.value)}
                />
                <label className="form-check-label" htmlFor="speed-fast">
                    ⚡ Fast
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="speedRadioGroup" 
                    id="speed-normal"
                    value="normal"
                    checked={selectedOption === 'normal'}
                    onChange={(e) => onRadioChange(e.target.value)}
                />
                <label className="form-check-label" htmlFor="speed-normal">
                    ▶️ Normal
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="speedRadioGroup" 
                    id="speed-slow"
                    value="slow"
                    checked={selectedOption === 'slow'}
                    onChange={(e) => onRadioChange(e.target.value)}
                />
                <label className="form-check-label" htmlFor="speed-slow">
                    🐌 Slow
                </label>
            </div>
        </div>
    );
}

export default RadioControls;