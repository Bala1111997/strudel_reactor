import React, { useState } from 'react';

function VolumeControl() {
    const [volume, setVolume] = useState(50);

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        
    };

    return (
        <div className="volume-section">
            <label htmlFor="volumeSlider" className="form-label">Volume Control</label>
            <input 
                type="range" 
                className="form-range" 
                min="0" 
                max="100" 
                value={volume} 
                id="volumeSlider"
                onChange={handleVolumeChange}
            />
            <div className="text-center mt-2">
                <small className="text-muted">{volume}%</small>
            </div>
        </div>      
    )
}

export default VolumeControl;