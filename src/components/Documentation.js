import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Documentation() {
    return (
        <div className="bg-dark min-vh-100">
            <Navbar />
            <main className="container-fluid py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <article className="blog-post text-white">
                            <h2 className="display-5 link-body-emphasis mb-1 text-primary">Getting Started with Strudel</h2>
                            <p className="blog-post-meta text-secondary">Live Coding Music Interface by <a href="https://htetnaybala.me" className="text-warning">Htet Nay Bala</a></p>
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
                                <li><strong className="text-success">Normal</strong> - Standard tempo (1x speed)</li>
                                <li><strong className="text-primary">Slow</strong> - Half tempo (0.5x speed)</li>
                            </ul>
                            
                            <h2 className="text-warning">Music Code Editor</h2>
                            <p>The Music Code Editor is where you write your Strudel music code. It supports live coding with syntax highlighting and real-time processing.</p>
                            
                            <h3 className="text-info">Dynamic Speed Control Syntax</h3>
            <p>To control tempo dynamically in your music code, use the special placeholder syntax:</p>
            <pre className="bg-secondary text-white p-3 rounded">&lt;p1_Speed&gt;</pre>
            <p>This placeholder gets automatically replaced with the current speed value based on your radio button selection:</p>
            <ul>
                <li><span className="bg-secondary text-white px-2 py-1 rounded">&lt;p1_Speed&gt;</span> becomes <span className="bg-success text-white px-2 py-1 rounded">2</span> when <strong className="text-danger">Fast</strong> is selected</li>
                <li><span className="bg-secondary text-white px-2 py-1 rounded">&lt;p1_Speed&gt;</span> becomes <span className="bg-success text-white px-2 py-1 rounded">1</span> when <strong className="text-success">Normal</strong> is selected</li>
                <li><span className="bg-secondary text-white px-2 py-1 rounded">&lt;p1_Speed&gt;</span> becomes <span className="bg-success text-white px-2 py-1 rounded">0.5</span> when <strong className="text-primary">Slow</strong> is selected</li>
            </ul>                            <h3 className="text-info">Example Usage</h3>
                            <p>Here's how you can use the speed control in your Strudel code:</p>
                            <pre className="bg-secondary text-white p-3 rounded">sound("bd hh sd hh").speed(&lt;p1_Speed&gt;)</pre>
                            <p>When you change the speed setting, this automatically becomes:</p>
                            <ul>
                                <li><strong>Fast:</strong> <span className="bg-dark text-success px-2 py-1 rounded">sound("bd hh sd hh").speed(2)</span></li>
                                <li><strong>Normal:</strong> <span className="bg-dark text-success px-2 py-1 rounded">sound("bd hh sd hh").speed(1)</span></li>
                                <li><strong>Slow:</strong> <span className="bg-dark text-success px-2 py-1 rounded">sound("bd hh sd hh").speed(0.5)</span></li>
                            </ul>
                            
                            <h3 className="text-warning">Sample Code Examples</h3>
                            <p>Copy these examples into your Music Code Editor to test speed control:</p>
                            
                            <h4 className="text-info">Simple Pattern:</h4>
                            <pre className="bg-secondary text-white p-3 rounded">var cpm = 40;

note("c3 g3 e3 g3").sound("sawtooth").cpm(cpm * &lt;p1_Speed&gt;)</pre>
                            
                            <h4 className="text-info">Bass Line:</h4>
                            <pre className="bg-secondary text-white p-3 rounded">var cpm = 25;

note("f1 ~ ~ f1 ~ ~ f1 ~").sound("square").lpf(200).cpm(cpm * &lt;p1_Speed&gt;)</pre>
                            
                            <h4 className="text-info">Multiple Sounds:</h4>
                            <pre className="bg-secondary text-white p-3 rounded">var cpm = 30;

stack(
  note("c3 e3 g3 c4").sound("sawtooth"),
  note("f5").sound("sine")
).cpm(cpm * &lt;p1_Speed&gt;)</pre>
                            
                            <h4 className="text-info">Using Speed Method:</h4>
                            <pre className="bg-secondary text-white p-3 rounded">var cpm = 35;

note("c5 f4 bb4 ab4").sound("triangle").cpm(cpm * &lt;p1_Speed&gt;)</pre>

                            <div className="alert alert-info mt-4 p-3 rounded border border-info">
                                <h5 className="text-info">How to Use Speed Control:</h5>
                                <p>To make speed control work, use <span className="bg-secondary text-warning px-2 py-1 rounded">.cpm(cpm * &lt;p1_Speed&gt;)</span> at the end of your patterns. The app will automatically replace <span className="bg-secondary text-warning px-2 py-1 rounded">&lt;p1_Speed&gt;</span> with the selected speed value (Fast=2, Normal=1, Slow=0.5).</p>
                            </div>
                        </article>
                        
                        <article className="blog-post text-white mt-5">
                            <h2 className="display-5 link-body-emphasis mb-1 text-primary">Quick Start Guide</h2>
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Documentation;