// StrudelEditor component to display live output editor.

import React from 'react';

function StrudelEditor() {
    return (
        <div>
            <h5 className="text-secondary mb-3 fw-bold text-end">
                <i className="fas fa-terminal me-2 text-success"></i>
                    Live Output
            </h5>
            <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                <div id="editor" />
            </div>
        </div>
    );
}

export default StrudelEditor;