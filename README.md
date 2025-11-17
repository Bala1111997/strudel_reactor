# Strudel Music Player

A React-based live coding music application using the Strudel engine.

## Controls

**Play Button** - Starts the music with the current code.

**Stop Button** - Stops all music playback.

**Process Button** - Replaces placeholders in your code with control values.

**Process & Play Button** - Process and play in one click.

**Speed Control** - Radio buttons to change tempo:

- Fast: 2x speed
- Normal: 1x speed (default)
- Slow: 0.5x speed

**Volume Control** - Slider to adjust master volume (0-100, default: 100).

**Crush Control** - Slider for bit crushing effect (1-16, default: 8). Lower = more distortion.

**Reverb Control** - Radio buttons for room echo:

- None: No reverb
- Low: Light echo (default)
- Medium: Medium echo
- High: Heavy echo

**Pan Control** - Slider for stereo position (0-100, default: 50). 0=left, 50=center, 100=right.

**Beat Visualization** - D3 graph showing real-time music data from Strudel .log() patterns.

## How to Use

1. Edit music code in the Preprocessor Editor
2. Click "Process" to replace placeholders with control values
3. Click "Play" to hear your music
4. Adjust controls - music updates automatically in real-time

## Usage Notes

- The Beat Visualization uses real data from Strudel .log() patterns
- Controls update automatically when you move sliders or change settings
- Preprocessor uses placeholders: `<p1_Volume>`, `<p1_Crush>`, `<p1_Reverb>`, `<p1_Pan>`, `<p1_Speed>`
- **Full documentation available in the app** - Navigate to the Documentation page for detailed explanations of all features and controls

## Video Demonstration

[Video Link - Add your video URL here]

## Song Attribution

Music pattern "stranger_tune" is inspired by Stranger Things theme.

## Setup

```bash
npm install
npm start
```
