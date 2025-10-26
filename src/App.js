import './App.css';
import React, {useState, useEffect, useRef } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core'; //func
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch from './console-monkey-patch'; //getD3Data
import ControlPanel from './components/ControlPanel';
import PreprocessorEditor from './components/PreprocessorEditor';
import RadioControls from './components/RadioControls';
import SpeedVisualization from './components/SpeedVisualization';
import StrudelEditor from './components/StrudelEditor';


let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

export default function App() {

// State for Preprocessor Text Area.
const [preprocessorText, setPreprocessorText] = useState(stranger_tune);

// State for Radio Button Selection.
const [radioSelection, setRadioSelection] = useState('normal');


function Proc() {
    let proc_text = preprocessorText; 
    let proc_text_replaced = proc_text.replaceAll('<p1_Speed>', ProcessText);
    ProcessText(proc_text);
    globalEditor.setCode(proc_text_replaced)
}


function ProcessText(match, ...args) {
    return getSpeedValue(radioSelection);
}

function getSpeedValue(speed) {
    if (speed === "fast") {
        return "2";      // Double the base tempo
    } else if (speed === "normal") {
        return "1";      // Normal tempo
    } else if (speed === "slow") {
        return "0.5";    // Half the tempo 
    }
    return "1"; // Default to normal
}

// Functions for Control Panel.
function handlePlay() {
    if (globalEditor != null) {
        globalEditor.evaluate();
    }
};
function handleStop() {
    if (globalEditor != null) {
        globalEditor.stop();
    }
};
function handleProcess() {
    if (globalEditor != null) {
        Proc();
    }
};
function handleProcessAndPlay() {
    if (globalEditor != null) {
        Proc();
        globalEditor.evaluate();
    }   
};


function handleRadioChange(value) {
    setRadioSelection(value);
    
    if (globalEditor != null) {
        let proc_text = preprocessorText;
        let replace = getSpeedValue(value);
        let proc_text_replaced = proc_text.replaceAll('<p1_Speed>', replace);
        globalEditor.setCode(proc_text_replaced);
        globalEditor.evaluate();
    }
}

const hasRun = useRef(false);

useEffect(() => {

    if (!hasRun.current) {
        document.addEventListener("d3Data", handleD3Data);
        console_monkey_patch();
        hasRun.current = true;
        //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            //init canvas
            const canvas = document.getElementById('roll');
            canvas.width = canvas.width * 2;
            canvas.height = canvas.height * 2;
            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
                onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
                prebake: async () => {
                    initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                    const loadModules = evalScope(
                        import('@strudel/core'),
                        import('@strudel/draw'),
                        import('@strudel/mini'),
                        import('@strudel/tonal'),
                        import('@strudel/webaudio'),
                    );
                    await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
                },
            });
            
        // 
        if (globalEditor) {
            globalEditor.setCode(stranger_tune);
        }
    }

}, []);


return (
    <div>
        <h2>🎸Strudel Music Player🎸</h2>
        <main>

            <div className="container-fluid">
                <div className="row">
                    
                    <PreprocessorEditor 
                        value={preprocessorText}
                        onChange={setPreprocessorText}
                    />
                    
                    <ControlPanel 
                        onPlay={handlePlay} 
                        onStop={handleStop}  
                        onProcess={handleProcess} 
                        onProcessAndPlay={handleProcessAndPlay} 
                    />
                
                </div>
                <div className="row mt-4">
                    <StrudelEditor 
                        editorRef={globalEditor}
                        onEditorReady={(container) => {
                        }}
                    />
                    
                    <RadioControls 
                        selectedOption={radioSelection} 
                        onRadioChange={handleRadioChange} 
                    />
                    
                    <SpeedVisualization speed={radioSelection} />

                </div>
            </div>
            <canvas id="roll"></canvas>
        </main >
    </div >
);


}