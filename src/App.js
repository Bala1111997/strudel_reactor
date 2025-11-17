import './App.css';
import React, {useState, useEffect, useRef } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core'; //func
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch from './console-monkey-patch';
import ControlPanel from './components/ControlPanel';
import PreprocessorEditor from './components/PreprocessorEditor';
import RadioControls from './components/RadioControls';
import SpeedVisualization from './components/SpeedVisualization';
import StrudelEditor from './components/StrudelEditor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VolumeControl from './components/VolumeControl';

import ReverbControl from './components/ReverbControl';
import CrushControl from './components/CrushControl';
import BeatVisualization from './components/BeatVisualization';
import PanControl from './components/PanControl';


// Global editor variable.
let globalEditor = null;

export default function App() {

// State management for all controls.
const [preprocessorText, setPreprocessorText] = useState(stranger_tune);
const [radioSelection, setRadioSelection] = useState('normal');
const [reverbSelection, setReverbSelection] = useState('low');
const [volume, setVolume] = useState(100);
const [crush, setCrush] = useState(8);
const [pan, setPan] = useState(50);

// Processing function to replace placeholders and set code in the editor.
function Proc() {
    let proc_text = preprocessorText;
    let speedReplace = getSpeedValue(radioSelection);
    let reverbReplace = getReverbValue(reverbSelection);
    let volumeReplace = (volume / 100).toFixed(2);
    let crushReplace = crush;
    let panReplace = (pan / 100).toFixed(2);

    let proc_text_replaced = proc_text
        .replaceAll('<p1_Speed>', speedReplace)
        .replaceAll('<p1_Reverb>', reverbReplace)
        .replaceAll('<p1_Volume>', volumeReplace)
        .replaceAll('<p1_Crush>', crushReplace)
        .replaceAll('<p1_Pan>', panReplace);

    globalEditor.setCode(proc_text_replaced)
}

// Convert speed selection to number string.
function getSpeedValue(speed) {
    if (speed === "fast") {
        return "2";      
    } else if (speed === "normal") {
        return "1";      
    } else if (speed === "slow") {
        return "0.5";    
    }
    return "1";
}


// Convert reverb selection to number string.
function getReverbValue(reverb) {
    if (reverb === "none") {
        return "0.0";
    } else if (reverb === "low") {
        return "0.3";
    } else if (reverb === "medium") {
        return "0.5";
    } else if (reverb === "high") {
        return "0.8";
    }
    return "0.3"; 
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

// Handler to update state and set the code.
function handleRadioChange(value) {
    setRadioSelection(value);

    if (globalEditor != null) {
        let proc_text = preprocessorText;
        let speedReplace = getSpeedValue(value);
        let reverbReplace = getReverbValue(reverbSelection);
        let volumeReplace = (volume / 100).toFixed(2);
        let crushReplace = crush;
        let panReplace = (pan / 100).toFixed(2);

        let proc_text_replaced = proc_text
            .replaceAll('<p1_Speed>', speedReplace)
            .replaceAll('<p1_Reverb>', reverbReplace)
            .replaceAll('<p1_Volume>', volumeReplace)
            .replaceAll('<p1_Crush>', crushReplace)
            .replaceAll('<p1_Pan>', panReplace);

        globalEditor.setCode(proc_text_replaced);
        globalEditor.evaluate();
    }
}

function handleReverbChange(value) {
    setReverbSelection(value);

    if (globalEditor != null) {
        let proc_text = preprocessorText;
        let speedReplace = getSpeedValue(radioSelection);
        let reverbReplace = getReverbValue(value);
        let volumeReplace = (volume / 100).toFixed(2);
        let crushReplace = crush;
        let panReplace = (pan / 100).toFixed(2);

        let proc_text_replaced = proc_text
            .replaceAll('<p1_Speed>', speedReplace)
            .replaceAll('<p1_Reverb>', reverbReplace)
            .replaceAll('<p1_Volume>', volumeReplace)
            .replaceAll('<p1_Crush>', crushReplace)
            .replaceAll('<p1_Pan>', panReplace);

        globalEditor.setCode(proc_text_replaced);
        globalEditor.evaluate();
    }
}

function handleVolumeChange(value) {
    setVolume(value);

    if (globalEditor != null) {
        let proc_text = preprocessorText;
        let speedReplace = getSpeedValue(radioSelection);
        let reverbReplace = getReverbValue(reverbSelection);
        let volumeReplace = (value / 100).toFixed(2);
        let crushReplace = crush;
        let panReplace = (pan / 100).toFixed(2);

        let proc_text_replaced = proc_text
            .replaceAll('<p1_Speed>', speedReplace)
            .replaceAll('<p1_Reverb>', reverbReplace)
            .replaceAll('<p1_Volume>', volumeReplace)
            .replaceAll('<p1_Crush>', crushReplace)
            .replaceAll('<p1_Pan>', panReplace);

        globalEditor.setCode(proc_text_replaced);
        globalEditor.evaluate();
    }
}

function handleCrushChange(value) {
    setCrush(value);

    if (globalEditor != null) {
        let proc_text = preprocessorText;
        let speedReplace = getSpeedValue(radioSelection);
        let reverbReplace = getReverbValue(reverbSelection);
        let volumeReplace = (volume / 100).toFixed(2);
        let crushReplace = value;
        let panReplace = (pan / 100).toFixed(2);

        let proc_text_replaced = proc_text
            .replaceAll('<p1_Speed>', speedReplace)
            .replaceAll('<p1_Reverb>', reverbReplace)
            .replaceAll('<p1_Volume>', volumeReplace)
            .replaceAll('<p1_Crush>', crushReplace)
            .replaceAll('<p1_Pan>', panReplace);

        globalEditor.setCode(proc_text_replaced);
        globalEditor.evaluate();
    }
}

function handlePanChange(value) {
    setPan(value);

    if (globalEditor != null) {
        let proc_text = preprocessorText;
        let speedReplace = getSpeedValue(radioSelection);
        let reverbReplace = getReverbValue(reverbSelection);
        let volumeReplace = (volume / 100).toFixed(2);
        let crushReplace = crush;
        let panReplace = (value / 100).toFixed(2);

        let proc_text_replaced = proc_text
            .replaceAll('<p1_Speed>', speedReplace)
            .replaceAll('<p1_Reverb>', reverbReplace)
            .replaceAll('<p1_Volume>', volumeReplace)
            .replaceAll('<p1_Crush>', crushReplace)
            .replaceAll('<p1_Pan>', panReplace);

        globalEditor.setCode(proc_text_replaced);
        globalEditor.evaluate();
    }
}

// Prevent multiple initializations.
const hasRun = useRef(false);

// Initialize the Strudel editor.
useEffect(() => {
    if (!hasRun.current) {
        hasRun.current = true;

        // Apply console monkey patch for D3.
        console_monkey_patch();

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
            window.globalEditor = globalEditor;
        }
    }
}, []);

// App render with all components.
return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
        <Navbar />
        <main className="container-fluid py-4 flex-grow-1">
            <div className="row g-4">
                <div className="col-md-3" style={{marginTop: "4rem"}}>
                    <div className="d-flex flex-column gap-4">

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

                        <div className="text-center" style={{ marginBottom: '-1.3rem' }}>
                            <SpeedVisualization speed={radioSelection} />
                        </div>

                        <ReverbControl
                            selectedReverb={reverbSelection}
                            onReverbChange={handleReverbChange}
                        />

                        <CrushControl
                            crush={crush}
                            onCrushChange={handleCrushChange}
                        />

                        <VolumeControl
                            volume={volume}
                            onVolumeChange={handleVolumeChange}
                        />

                        <PanControl
                            pan={pan}
                            onPanChange={handlePanChange}
                        />

                    </div>
                </div>
                <div className="col-md-9">
                    <div className="d-flex flex-column gap-4">
                        <PreprocessorEditor
                            value={preprocessorText}
                            onChange={setPreprocessorText}
                        />

                        <div className="row">
                            <div className="col-md-8">
                                <StrudelEditor />
                            </div>
                            <div className="col-md-4">
                                <div className="text-center">

                                    <BeatVisualization />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
);


}