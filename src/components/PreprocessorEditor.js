import React from "react";

function PreprocessorEditor({ value, onChange }) {
    return (
        <div className="col-md-8" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
            <label htmlFor="preprocessor-textarea" className="form-label">Text to preprocess:</label>
            <textarea 
                className="form-control" 
                rows="15" 
                id="preprocessor-textarea"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )

};

export default PreprocessorEditor;

