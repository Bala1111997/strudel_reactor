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


let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

export default function App() {

// State for Preprocessor Text Area.
const [preprocessorText, setPreprocessorText] = useState(stranger_tune);

// State for Radio Button Selection.
const [radioSelection, setRadioSelection] = useState('on');


function Proc() {
    let proc_text = preprocessorText; 
    let proc_text_replaced = proc_text.replaceAll('<p1_Radio>', ProcessText);
    ProcessText(proc_text);
    globalEditor.setCode(proc_text_replaced)
}


function ProcAndPlay() {
    if (globalEditor != null && globalEditor.repl.state.started === true) {
        console.log(globalEditor)
        Proc()
        globalEditor.evaluate();
    }
}


function ProcessText(match, ...args) {
    let replace = ""
    if (radioSelection === "hush") {
        replace = "_"
    }
    return replace
}

// Functions for Control Panel.
function handlePlay() {
    globalEditor.evaluate();
};
function handleStop() {
    globalEditor.stop();
};
function handleProcess() {
    Proc();
};
function handleProcessAndPlay() {
    if (globalEditor != null) {
        Proc();
        globalEditor.evaluate();
    }   
};

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
        <h2>Strudel Demo</h2>
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
                <div className="row">
                    <div className="col-md-8" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                        <div id="editor" />
                        <div id="output" />
                    </div>
                    
                    <RadioControls 
                        selectedOption={radioSelection} 
                        onRadioChange={setRadioSelection} 
                    />

                </div>
            </div>
            <canvas id="roll"></canvas>
        </main >
    </div >
);


}