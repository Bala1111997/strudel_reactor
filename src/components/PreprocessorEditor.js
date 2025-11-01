import React from "react";

function PreprocessorEditor({ value, onChange }) {
    return (
        <div>
            <h5 className="text-white mb-3">Music Code Editor</h5>
            
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

