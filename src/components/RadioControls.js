import React from "react";

function RadioControls({ selectedOption, onRadioChange }) {
    return (
        <div className="col-md-2">
            <div className="card shadow-lg border-0">
                <div className="card-header bg-gradient bg-dark text-white text-center">
                    <h5 className="mb-0">
                        <i className="fas fa-tachometer-alt me-2"></i>
                    ⚡️ Speed Control
                    </h5>
                </div>
                <div className="card-body p-3">
                    <div className="d-grid gap-2">
                        {/* Fast Speed */}
                        <div className="form-check p-0">
                            <input 
                                className="btn-check" 
                                type="radio" 
                                name="speedRadioGroup" 
                                id="speed-fast"
                                value="fast"
                                checked={selectedOption === 'fast'}
                                onChange={(e) => onRadioChange(e.target.value)}
                            />
                            <label 
                                className={`btn btn-outline-danger w-100 fw-normal shadow-sm ${
                                    selectedOption === 'fast' ? 'active' : ''
                                }`} 
                                htmlFor="speed-fast"
                                style={{fontSize: "0.875rem", padding: "0.5rem 0.75rem"}}
                            >
                                <i className="fas fa-bolt me-1"></i>
                                Fast
                            </label>
                        </div>
                        
                        {/* Normal Speed */}
                        <div className="form-check p-0">
                            <input 
                                className="btn-check" 
                                type="radio" 
                                name="speedRadioGroup" 
                                id="speed-normal"
                                value="normal"
                                checked={selectedOption === 'normal'}
                                onChange={(e) => onRadioChange(e.target.value)}
                            />
                            <label 
                                className={`btn btn-outline-success w-100 fw-normal shadow-sm ${
                                    selectedOption === 'normal' ? 'active' : ''
                                }`} 
                                htmlFor="speed-normal"
                                style={{fontSize: "0.875rem", padding: "0.5rem 0.75rem"}}
                            >
                                <i className="fas fa-play me-1"></i>
                                Normal
                            </label>
                        </div>
                        
                        {/* Slow Speed */}
                        <div className="form-check p-0">
                            <input 
                                className="btn-check" 
                                type="radio" 
                                name="speedRadioGroup" 
                                id="speed-slow"
                                value="slow"
                                checked={selectedOption === 'slow'}
                                onChange={(e) => onRadioChange(e.target.value)}
                            />
                            <label 
                                className={`btn btn-outline-info w-100 fw-normal shadow-sm ${
                                    selectedOption === 'slow' ? 'active' : ''
                                }`} 
                                htmlFor="speed-slow"
                                style={{fontSize: "0.875rem", padding: "0.5rem 0.75rem"}}
                            >
                                <i className="fas fa-turtle me-1"></i>
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