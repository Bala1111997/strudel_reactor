// Speed Control component 
import React from "react";

// Pass selected option and handler for radio button changes in the function.
function RadioControls({ selectedOption, onRadioChange }) {
    return (
        <div>
            <div className="card shadow-lg border-0">
                <div className="card-header">
                    <h5 className="mb-0 text-danger">
                        <i className="fas fa-tachometer-alt me-2"></i>
                        Speed Control
                    </h5>
                </div>
                <div className="card-body p-3">
                    <div className="d-flex flex-column gap-2">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="speedOption"
                                id="speedFast"
                                value="fast"
                                checked={selectedOption === 'fast'}
                                onChange={(e) => onRadioChange(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="speedFast">
                                Fast
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="speedOption"
                                id="speedNormal"
                                value="normal"
                                checked={selectedOption === 'normal'}
                                onChange={(e) => onRadioChange(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="speedNormal">
                                Normal
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="speedOption"
                                id="speedSlow"
                                value="slow"
                                checked={selectedOption === 'slow'}
                                onChange={(e) => onRadioChange(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="speedSlow">
                                Slow
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RadioControls;