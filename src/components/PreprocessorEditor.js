import React from "react";

function PreprocessorEditor({ value, onChange }) {
    return (
        <div className="col-md-5">
            <div className="h-100">
                {/* Header */}
                <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-circle p-3 me-3 shadow-lg" 
                             style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                            <i className="fas fa-code text-white fs-4"></i>
                        </div>
                        <div>
                            <h3 className="text-white mb-1 fw-bold" 
                                style={{
                                    fontFamily: "'Inter', 'Segoe UI', sans-serif", 
                                    letterSpacing: "-0.025em",
                                    textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                }}>
                                Music Code Editor
                            </h3>
                        </div>
                    </div>
                    
                    {/* Instruction Banner */}
                    <div className="border border-info border-opacity-25 rounded-3 p-3 mb-3"
                         style={{
                             background: 'linear-gradient(135deg, rgba(13, 202, 240, 0.1) 0%, rgba(13, 110, 253, 0.1) 100%)',
                             backdropFilter: 'blur(10px)'
                         }}>
                        <div className="d-flex align-items-center">
                            <div className="bg-warning bg-opacity-20 rounded-circle p-2 me-3">
                                <i className="fas fa-lightbulb text-warning"></i>
                            </div>
                            <div>
                                <h6 className="text-white mb-1 fw-bold"
                                    style={{fontFamily: "'Inter', 'Segoe UI', sans-serif"}}>
                                    Quick Start Guide
                                </h6>
                                <p className="text-light mb-0 opacity-90 small"
                                   style={{fontFamily: "'Inter', 'Segoe UI', sans-serif"}}>
                                    Type your Strudel music code below. Changes are processed automatically when you select different speeds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status bar */}
                    <div className="d-flex justify-content-between align-items-center mt-2 px-2 py-1 bg-dark rounded text-light small">
                        <span>
                            <i className="fas fa-keyboard me-1"></i>
                            Lines: {value.split('\n').length} | Chars: {value.length}
                        </span>
                    </div>
                
                {/* Code Editor */}
                <div className="position-relative">
                    <textarea 
                        className="form-control bg-dark text-light border-secondary border-3 shadow-lg" 
                        rows="18" 
                        id="preprocessor-textarea"
                        value={value}
                        onChange={(event) => onChange(event.target.value)}
                        placeholder="Enter your Strudel music code here..."
                        style={{
                            fontFamily: "'Fira Code', 'Monaco', 'Menlo', monospace",
                            fontSize: "14px",
                            lineHeight: "1.5",
                            resize: "vertical",
                            minHeight: "400px"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PreprocessorEditor;

