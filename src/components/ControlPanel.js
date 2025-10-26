import React from "react";

function ControlPanel({ onPlay, onStop, onProcess, onProcessAndPlay }) {
    return (
        <div className="col-md-3">
            <div className="card shadow-lg border-0">
                <div className="card-header bg-gradient bg-dark text-white text-center">
                    <h5 className="mb-0">
                        <i className="fas fa-music me-2"></i>
                        ⚙️ Control Panel
                    </h5>
                </div>
                <div className="card-body p-3">
                    <div className="row g-3">
                        <div className="col-6">
                            <button 
                                className="btn btn-warning btn-lg shadow w-100 fw-bold text-dark" 
                                onClick={onProcess}
                            >
                                <i className="fas fa-cogs me-2"></i>
                                Process
                            </button>
                        </div>
                        <div className="col-6">
                            <button 
                                className="btn btn-success btn-lg shadow w-100 fw-bold" 
                                onClick={onPlay}
                            >
                                <i className="fas fa-play me-2"></i>
                                Play
                            </button>
                        </div>
                        <div className="col-6">
                            <button 
                                className="btn btn-danger btn-lg shadow w-100 fw-bold" 
                                onClick={onStop}
                            >
                                <i className="fas fa-stop me-2"></i>
                                Stop
                            </button>
                        </div>
                        <div className="col-6">
                            <button 
                                className="btn btn-info btn-lg shadow w-100 fw-bold" 
                                onClick={onProcessAndPlay}
                            >
                                <i className="fas fa-rocket me-2"></i>
                                Porcess & Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlPanel;