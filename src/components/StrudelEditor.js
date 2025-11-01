import React, { useEffect, useRef } from 'react';

function StrudelEditor({ editorRef, onEditorReady }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (onEditorReady && containerRef.current) {
            onEditorReady(containerRef.current);
        }
    }, [onEditorReady]);

    return (
        <div>
            <h5 className="text-secondary mb-3 fw-bold text-end">
                <i className="fas fa-terminal me-2 text-success"></i>
                    Live Output
            </h5>
            <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                <div id="editor" />
                <div id="output" />
            </div>
        </div>
    );
}

export default StrudelEditor;