import React from "react";

function RadioControls({ selectedOption, onRadioChange }) {
    return (
        <div className="col-md-4">
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="p1RadioGroup" 
                    id="p1-on"
                    value="on"
                    checked={selectedOption === 'on'}
                    onChange={(e) => onRadioChange(e.target.value)}
                />
                <label className="form-check-label" htmlFor="p1-on">
                    p1: ON
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="p1RadioGroup" 
                    id="p1-hush"
                    value="hush"
                    checked={selectedOption === 'hush'}
                    onChange={(e) => onRadioChange(e.target.value)}
                />
                <label className="form-check-label" htmlFor="p1-hush">
                    p1: HUSH
                </label>
            </div>
        </div>
    );
}

export default RadioControls;