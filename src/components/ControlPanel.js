import React from "react";

function ControlPanel({ onPlay, onStop, onProcess, onProcessAndPlay }) {
    return (
        <div className="col-md-2">
            <div className="card shadow-lg border-0">
                <div className="card-header bg-gradient bg-dark text-white text-center">
                    <h5 className="mb-0">
                        <i className="fas fa-music me-2"></i>
                        ⚙️ Control Panel
                    </h5>
                </div>
                <div className="card-body p-3">
                    <div className="row g-2">
                        <div className="col-6">
                            <button 
                                className="btn btn-warning shadow w-100 fw-normal text-dark" 
                                onClick={onProcess}
                                style={{fontSize: "0.875rem", padding: "0.5rem 0.75rem"}}
                            >
                                <i className="fas fa-cogs me-1"></i>
                                Process
                            </button>
                        </div>
                        <div className="col-6">
                            <button 
                                className="btn btn-success shadow w-100 fw-normal" 
                                onClick={onPlay}
                                style={{fontSize: "0.875rem", padding: "0.5rem 0.75rem"}}
                            >
                                <i className="fas fa-play me-1"></i>
                                Play
                            </button>
                        </div>
                        <div className="col-6">
                            <button 
                                className="btn btn-danger shadow w-100 fw-normal" 
                                onClick={onStop}
                                style={{fontSize: "0.875rem", padding: "0.5rem 0.75rem"}}
                            >
                                <i className="fas fa-stop me-1"></i>
                                Stop
                            </button>
                        </div>
                        <div className="col-6">
                            <button 
                                className="btn btn-info shadow w-100 fw-normal" 
                                onClick={onProcessAndPlay}
                                style={{fontSize: "0.875rem", padding: "0.5rem 0.75rem"}}
                            >
                                <i className="fas fa-rocket me-1"></i>
                                Process/Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlPanel;