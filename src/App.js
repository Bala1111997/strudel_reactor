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

import ReverbControl from './components/ReverbControl';
import CrushControl from './components/CrushControl';
import BeatVisualization from './components/BeatVisualization';

let globalEditor = null;

export default function App() {

// State for Preprocessor Text Area.
const [preprocessorText, setPreprocessorText] = useState(stranger_tune);

// State for Radio Button Selection.
const [radioSelection, setRadioSelection] = useState('normal');

// State for Reverb Selection.
const [reverbSelection, setReverbSelection] = useState('low');

// State for Volume.
const [volume, setVolume] = useState(100);

// State for Crush.
const [crush, setCrush] = useState(8);

const [isPlaying, setIsPlaying] = useState(false);


function Proc() {
    let proc_text = preprocessorText;
    let speedReplace = getSpeedValue(radioSelection);
    let reverbReplace = getReverbValue(reverbSelection);
    let volumeReplace = (volume / 100).toFixed(2);
    let crushReplace = crush;

    let proc_text_replaced = proc_text
        .replaceAll('<p1_Speed>', speedReplace)
        .replaceAll('<p1_Reverb>', reverbReplace)
        .replaceAll('<p1_Volume>', volumeReplace)
        .replaceAll('<p1_Crush>', crushReplace);

    globalEditor.setCode(proc_text_replaced)
}

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
        setIsPlaying(true);
    }
};
function handleStop() {
    if (globalEditor != null) {
        globalEditor.stop();
        setIsPlaying(false);
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
        setIsPlaying(true);
    }
};


function handleRadioChange(value) {
    setRadioSelection(value);

    if (globalEditor != null) {
        let proc_text = preprocessorText;
        let speedReplace = getSpeedValue(value);
        let reverbReplace = getReverbValue(reverbSelection);
        let volumeReplace = (volume / 100).toFixed(2);
        let crushReplace = crush;

        let proc_text_replaced = proc_text
            .replaceAll('<p1_Speed>', speedReplace)
            .replaceAll('<p1_Reverb>', reverbReplace)
            .replaceAll('<p1_Volume>', volumeReplace)
            .replaceAll('<p1_Crush>', crushReplace);

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

        let proc_text_replaced = proc_text
            .replaceAll('<p1_Speed>', speedReplace)
            .replaceAll('<p1_Reverb>', reverbReplace)
            .replaceAll('<p1_Volume>', volumeReplace)
            .replaceAll('<p1_Crush>', crushReplace);

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

        let proc_text_replaced = proc_text
            .replaceAll('<p1_Speed>', speedReplace)
            .replaceAll('<p1_Reverb>', reverbReplace)
            .replaceAll('<p1_Volume>', volumeReplace)
            .replaceAll('<p1_Crush>', crushReplace);

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

        let proc_text_replaced = proc_text
            .replaceAll('<p1_Speed>', speedReplace)
            .replaceAll('<p1_Reverb>', reverbReplace)
            .replaceAll('<p1_Volume>', volumeReplace)
            .replaceAll('<p1_Crush>', crushReplace);

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
            window.globalEditor = globalEditor;
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

                                    <BeatVisualization isPlaying={isPlaying} />
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