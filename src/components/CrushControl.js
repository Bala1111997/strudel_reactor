// CrushControl component for adjusting the crush level of audio processing.

import React from 'react';

// Pass cursh value and handler for crush level changes in the function.
function CrushControl({ crush, onCrushChange }) {
    return (
        <div className="card shadow-lg border-0">
            <div className="card-header">
                <h5 className="mb-0 text-danger">
                    <i className="fas fa-bolt me-2"></i>
                    Crush Control
                </h5>
            </div>
            <div className="card-body p-3">
                <input
                    type="range"
                    className="form-range"
                    min="1"
                    max="16"
                    value={crush}
                    id="crushSlider"
                    onChange={(e) => onCrushChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default CrushControl;
