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
            <p>Output</p>
            <div className="col-md-5 " style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                <div id="editor" />
                <div id="output" />
            </div>
        </div>
    );
}

export default StrudelEditor;