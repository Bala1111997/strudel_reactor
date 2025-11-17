// VolumeControl component for adjusting the audio.

import React from 'react';

// Pass volume value and handler for volume changes in the function.
function VolumeControl({ volume, onVolumeChange }) {
    return (
        <div className="card shadow-lg border-0">
            <div className="card-header">
                <h5 className="mb-0 text-danger">
                    <i className="fas fa-volume-up me-2"></i>
                    Volume Control
                </h5>
            </div>
            <div className="card-body p-3">
                <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={volume}
                    id="volumeSlider"
                    onChange={(e) => onVolumeChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default VolumeControl;