import React from 'react';

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
                <div className="text-center mt-2">
                    <small className="text-muted">{volume}%</small>
                </div>
            </div>
        </div>
    );
}

export default VolumeControl;