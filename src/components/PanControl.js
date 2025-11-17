// PanControl component for adjusting the pan level of audio processing.

import React from 'react';

// Pass pan value and handler for pan level changes in the function.
function PanControl({ pan, onPanChange }) {
    return (
        <div className="card shadow-lg border-0">
            <div className="card-header">
                <h5 className="mb-0 text-danger">
                    <i className="fas fa-arrows-alt-h me-2"></i>
                    Pan Control
                </h5>
            </div>
            <div className="card-body p-3">
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={pan}
                    id="panSlider"
                    onChange={(e) => onPanChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default PanControl;
