// Documentation component for Strudel Music Player instructions and features.

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Documentation() {
    return (
        <div className="bg-dark min-vh-100 d-flex flex-column">
            <Navbar />
            <main className="container-fluid py-4 flex-grow-1">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <article className="blog-post text-white">
                            <h2 className="display-5 link-body-emphasis mb-1 text-primary">Getting Started with Strudel</h2>
                            <p className="blog-post-meta text-secondary">Live Coding Music by <a href="https://htetnaybala.me" className="text-warning">Htet Nay Bala</a></p>
                            <p>Welcome to the Strudel Music Player! This is a React-based live coding music application that allows you to create and manipulate music in real-time using the powerful Strudel engine.</p>
                            <hr className="border-secondary" />
                            <p>Our application provides an intuitive interface for music creation with dynamic speed controls, real-time visualization, and instant playback. Perfect for both beginners and advanced users who want to explore algorithmic music composition.</p>
                            
                            <h2 className="text-warning">Control Panel Features</h2>
                            <p>The control panel provides essential music playback controls:</p>
                            <ul>
                                <li><strong className="text-success">Play Button</strong> - Starts music playback with current code</li>
                                <li><strong className="text-danger">Stop Button</strong> - Stops all music playback immediately</li>
                                <li><strong className="text-info">Process Button</strong> - Processes your code with current speed settings</li>
                                <li><strong className="text-warning">Process & Play</strong> - Combines processing and playback in one action</li>
                            </ul>
                            
                            <h3 className="text-info">Speed Control System</h3>
                            <p>Our dynamic speed control system allows real-time tempo manipulation:</p>
                            <ul>
                                <li><strong className="text-danger">Fast</strong> - Doubles the tempo (2x speed)</li>
                                <li><strong className="text-success">Normal</strong> - Standard tempo (1x speed) - Default</li>
                                <li><strong className="text-primary">Slow</strong> - Half tempo (0.5x speed)</li>
                            </ul>

                            <h3 className="text-info">Volume Control System</h3>
                            <p>Control the overall loudness of your music with the volume slider:</p>
                            <ul>
                                <li><strong className="text-success">Range</strong> - 0 to 100 (0% to 100%)</li>
                                <li><strong className="text-info">Default</strong> - 100 (full volume)</li>
                                <li><strong className="text-warning">Effect</strong> - Adjusts master output level</li>
                            </ul>

                            <h3 className="text-info">Crush Control System</h3>
                            <p>Add digital distortion effect to your music with the crush slider:</p>
                            <ul>
                                <li><strong className="text-danger">Range</strong> - 1 to 16 (bit depth)</li>
                                <li><strong className="text-info">Default</strong> - 8 (moderate distortion)</li>
                                <li><strong className="text-warning">Effect</strong> - Lower values create more distortion, higher values sound cleaner</li>
                            </ul>

                            <h3 className="text-info">Reverb Control System</h3>
                            <p>Add room echo effect to your music with reverb settings:</p>
                            <ul>
                                <li><strong className="text-primary">None</strong> - No reverb (0.0) - Dry sound</li>
                                <li><strong className="text-success">Low</strong> - Light reverb (0.3) - Small room - Default</li>
                                <li><strong className="text-warning">Medium</strong> - Moderate reverb (0.5) - Medium hall</li>
                                <li><strong className="text-danger">High</strong> - Heavy reverb (0.8) - Large cathedral</li>
                            </ul>

                            <h3 className="text-info">Pan Control System</h3>
                            <p>Control the stereo position of your music with the pan slider:</p>
                            <ul>
                                <li><strong className="text-success">Range</strong> - 0 to 100 (0=Left, 50=Center, 100=Right)</li>
                                <li><strong className="text-info">Default</strong> - 50 (center - both speakers)</li>
                                <li><strong className="text-warning">Effect</strong> - Moves sound between left and right speakers</li>
                            </ul>

                            <h2 className="text-warning">Beat Visualization System</h2>
                            <p>The Beat Visualization displays real-time music data as animated colored bars on the right side of the screen. This visualization uses actual data from your Strudel patterns to create a dynamic visual representation of your music.</p>

                            <h3 className="text-info">How It Works</h3>
                            <ul>
                                <li><strong className="text-success">Real-Time Data</strong> - The visualization captures live data from Strudel patterns using the .log() function</li>
                                <li><strong className="text-warning">Six Colored Bars</strong> - Each bar represents different data points from your music patterns</li>
                                <li><strong className="text-info">Automatic Updates</strong> - Bars animate automatically when music is playing</li>
                                <li><strong className="text-danger">Pattern Contribution</strong> - Music patterns with .log() contribute data to the visualization</li>
                            </ul>

                            <h3 className="text-info">Adding .log() to Your Patterns</h3>
                            <p>To make your music patterns contribute to the Beat Visualization, add .log() at the end of each pattern:</p>
                            <pre className="bg-secondary text-white p-3 rounded">note("c3 e3 g3")
  .sound("sawtooth")
  .lpf(800)
  .log()</pre>

                            <h2 className="text-warning">Using All Control Placeholders</h2>
                            <p>You can control Volume, Crush, Reverb, Pan, and Speed using special placeholders in your music code. Add these at the end of your stack to let the UI controls change your music in real-time.</p>

                            <h3 className="text-info">Available Control Placeholders</h3>
                            <ul>
                                <li><strong className="text-success">&lt;p1_Volume&gt;</strong> - Controls volume (0.0 to 1.0). Changes when you move the Volume slider.</li>
                                <li><strong className="text-danger">&lt;p1_Crush&gt;</strong> - Controls bit crushing effect (1 to 16). Changes when you move the Crush slider.</li>
                                <li><strong className="text-warning">&lt;p1_Reverb&gt;</strong> - Controls reverb/room effect (0.0 to 0.8). Changes when you select None, Low, Medium, or High reverb.</li>
                                <li><strong className="text-info">&lt;p1_Pan&gt;</strong> - Controls stereo position (0.0 to 1.0). Changes when you move the Pan slider.</li>
                                <li><strong className="text-primary">&lt;p1_Speed&gt;</strong> - Controls playback speed (0.5, 1.0, or 2.0). Changes when you select Slow, Normal, or Fast.</li>
                            </ul>

                            <h3 className="text-info">How to Use All Controls Together</h3>
                            <p>At the end of your stack, add this line to connect all controls:</p>
                            <pre className="bg-secondary text-white p-3 rounded">.gain(&lt;p1_Volume&gt;).crush(&lt;p1_Crush&gt;).room(&lt;p1_Reverb&gt;).pan(&lt;p1_Pan&gt;).cpm(cpm * &lt;p1_Speed&gt;)</pre>

                            <h3 className="text-warning">Complete Example</h3>
                            <p>Here is a complete example showing how to use all controls:</p>
                            <pre className="bg-secondary text-white p-3 rounded">var cpm = 28;

stack(
  note("c3 e3 g3")
    .sound("sawtooth")
    .lpf(800),

  note("c5")
    .sound("sine")
    .pan(0.8)

).gain(&lt;p1_Volume&gt;).crush(&lt;p1_Crush&gt;).room(&lt;p1_Reverb&gt;).pan(&lt;p1_Pan&gt;).cpm(cpm * &lt;p1_Speed&gt;)</pre>

                            <h3 className="text-info">What Each Control Does</h3>
                            <ul>
                                <li><strong>Volume</strong> - Makes your music louder or quieter</li>
                                <li><strong>Crush</strong> - Adds a digital distortion effect (lower = more distortion)</li>
                                <li><strong>Reverb</strong> - Adds echo/room effect (None = dry, High = lots of echo)</li>
                                <li><strong>Pan</strong> - Moves sound between left and right speakers (left/center/right)</li>
                                <li><strong>Speed</strong> - Makes music play faster or slower</li>
                            </ul>

                            <div className="alert alert-info mt-4 p-3 rounded border border-info">
                                <h5 className="text-info">Quick Steps:</h5>
                                <ol>
                                    <li>Write your music code in the Preprocessor Editor</li>
                                    <li>Add the control line at the end: <span className="bg-dark text-warning px-2 py-1 rounded">.gain(&lt;p1_Volume&gt;).crush(&lt;p1_Crush&gt;).room(&lt;p1_Reverb&gt;).pan(&lt;p1_Pan&gt;).cpm(cpm * &lt;p1_Speed&gt;)</span></li>
                                    <li>Click "Process" to replace placeholders with values</li>
                                    <li>Click "Play" to hear your music</li>
                                    <li>Move the sliders or change settings - the music updates automatically!</li>
                                </ol>
                            </div>
                        </article>
                        
                        
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Documentation;