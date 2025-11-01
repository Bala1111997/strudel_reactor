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
            <h5 className="text-white mb-3">Output</h5>
            <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                <div id="editor" />
                <div id="output" />
            </div>
        </div>
    );
}

export default StrudelEditor;