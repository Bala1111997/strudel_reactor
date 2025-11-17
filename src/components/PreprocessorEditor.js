// PreprocessorEditor component for editing Strudel music code.

import React from "react";

// Pass the value of the code and the handler for changes in the fuction.
function PreprocessorEditor({ value, onChange }) {
    return (
        <div>
            <h5 className="text-secondary mb-3 fw-bold text-end">
                <i className="fas fa-code me-2 text-primary"></i>
                Music Code Editor
            </h5>
            
            <textarea 
                className="form-control bg-dark text-light border-secondary" 
                rows="18" 
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Enter your Strudel music code here..."
                style={{
                    fontFamily: "monospace",
                    fontSize: "14px",
                    resize: "vertical"
                }}
            />
            
            <small className="text-light mt-2 d-block">
                Lines: {value.split('\n').length} | Characters: {value.length}
            </small>
        </div>
    );
}

export default PreprocessorEditor;

