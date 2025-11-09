export const stranger_tune = `var cpm = 28;

stack(

note(\`
[f3 ab3 g3]
[eb3 g3 c3]
[f3 bb3 ab3]
[eb3 c3 g3 f3]
\`)
  .slow(4)
  .euclidRot(4,16,2)
  .sound("sawtooth")
  .fm(0)
  .lpf(800)
  .decay(0.12)
  .pan(0.3)
  .gain(1.0)
  .delay(sine.range(0,0.75).slow(10))
  .mask("<0!4 1!500>")
,

note(\`
[f5]
\`)
  .euclidRot(3,16,10)
  .sound("sine")
  .fm(0)
  .lpf(400)
  .pan(0.8)
  .mask("<0!8 1!500>")
  .postgain(sine.range(0.6,1.6).slow(24))
,

note(\`
[c5@0.5 f4@0.5 f5@3]
[eb5@0.5 f5@0.5 bb4@3]
[db5@0.5 c5@0.5 f4@3]
[f4@0.5 g4@0.5 bb4 ab4 g4]
\`)
  .slow(4)
  .sound("triangle")
  .gain(0.5)
  .clip(3)
  .postgain(sine.range(1,0).slow(24))
  .mask("<0!8 1!500>")
  .pan(0.65)
,

note(\`
[f1 ~ ~ f1 ~ ~ f1 ~ ~ f1 ~ ~ f1 ~ ~ f1]
[db1 ~ ~ db1 ~ ~ db1 ~ ~ eb1 ~ ~ eb1 ~ ~ eb1]
\`)
  .slow(2)
  .sound("square")
  .lpf(200)
  .pan(0.4)
  .release(0.25)
  .room(0.2)
  .gain(0.3)
,
  
note("c1!4")
  .sound("sawtooth")
  .lpf(120)
  .gain(0.6)
  .room(0.15)
,

note("~ c4 ~ [c4 c4] ~ c4 ~ c4")
  .sound("square")
  .hpf(800)
  .gain(0.2)
  .crush(5)
,

note("~ c2 ~ [c2 ~ ~ c2]")
  .sound("square")
  .lpf(300)
  .gain(0.3)
,

note(\`
[f4 g4 f4 g4 ab4 g4 f4@2]
[eb4 f4 eb4 f4 c4 db4 eb4@2]
[f4 g4 f4 g4 bb4 g4 ab4@2]
[~ eb4 c4 bb3@2 g4@2 f4]
\`)
  .slow(4)
  .sound("square")
  .lpf(2000)
  .pan(0.65)
  .gain(0.4)
  .phaser(4).phasersweep(2000)
  .mask("<0!20 1!12>")
,

).gain(<p1_Volume>).crush(<p1_Crush>).room(<p1_Reverb>).cpm(cpm * <p1_Speed>)`;