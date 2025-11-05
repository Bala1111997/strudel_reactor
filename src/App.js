import './App.css';
import React, {useState, useEffect, useRef } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core'; //func
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import ControlPanel from './components/ControlPanel';
import PreprocessorEditor from './components/PreprocessorEditor';
import RadioControls from './components/RadioControls';
import SpeedVisualization from './components/SpeedVisualization';
import StrudelEditor from './components/StrudelEditor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VolumeControl from './components/VolumeControl';
import Mp3 from './components/Mp3';

let globalEditor = null;

export default function App() {

// State for Preprocessor Text Area.
const [preprocessorText, setPreprocessorText] = useState(stranger_tune);

// State for Radio Button Selection.
const [radioSelection, setRadioSelection] = useState('normal');


function Proc() {
    let proc_text = preprocessorText; 
    let replace = getSpeedValue(radioSelection);
    let proc_text_replaced = proc_text.replaceAll('<p1_Speed>', replace);
    globalEditor.setCode(proc_text_replaced)
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
        hasRun.current = true;
        
        // Initialize Strudel Editor
        globalEditor = new StrudelMirror({
            defaultOutput: webaudioOutput,
            getTime: () => getAudioContext().currentTime,
            transpiler,
            root: document.getElementById('editor'),
            prebake: async () => {
                initAudioOnFirstClick();
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
        
        if (globalEditor) {
            globalEditor.setCode(stranger_tune);
        }
    }
}, []);


return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
        <Navbar />
        <main className="container-fluid py-4 flex-grow-1">
            <div className="row g-4">
                <div className="col-md-3" style={{marginTop: "4rem"}}>
                    <div className="d-flex flex-column gap-4">
                        
                        <Mp3 />
                        
                        <ControlPanel 
                            onPlay={handlePlay} 
                            onStop={handleStop}  
                            onProcess={handleProcess} 
                            onProcessAndPlay={handleProcessAndPlay} 
                        />
                        
                        <RadioControls 
                            selectedOption={radioSelection} 
                            onRadioChange={handleRadioChange} 
                        />
                        
                        <VolumeControl />

                        <div className="text-center">
                            <SpeedVisualization speed={radioSelection} />
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="d-flex flex-column gap-4">
                        <PreprocessorEditor 
                            value={preprocessorText}
                            onChange={setPreprocessorText}
                        />
                        
                        <StrudelEditor />
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
);


}