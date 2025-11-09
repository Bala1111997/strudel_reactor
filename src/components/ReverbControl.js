import React from 'react';

function ReverbControl({ selectedReverb, onReverbChange }) {
    return (
        <div className="card shadow-lg border-0">
            <div className="card-header">
                <h5 className="mb-0 text-danger">
                    <i className="fas fa-wave-square me-2"></i>
                    Reverb Control
                </h5>
            </div>
            <div className="card-body p-3">
                <div className="d-flex flex-column gap-2">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="reverbOption"
                            id="reverbNone"
                            value="none"
                            checked={selectedReverb === 'none'}
                            onChange={(e) => onReverbChange(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="reverbNone">
                            None (0.0)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="reverbOption"
                            id="reverbLow"
                            value="low"
                            checked={selectedReverb === 'low'}
                            onChange={(e) => onReverbChange(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="reverbLow">
                            Low (0.3)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="reverbOption"
                            id="reverbMedium"
                            value="medium"
                            checked={selectedReverb === 'medium'}
                            onChange={(e) => onReverbChange(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="reverbMedium">
                            Medium (0.5)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="reverbOption"
                            id="reverbHigh"
                            value="high"
                            checked={selectedReverb === 'high'}
                            onChange={(e) => onReverbChange(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="reverbHigh">
                            High (0.8)
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReverbControl;
