import * as React from 'react';
import { useState } from 'react';
import { AudioVisualizer, LiveAudioVisualizer } from 'react-audio-visualize';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

export default function Waveform() {
  const [blob, setBlob] = useState();
  const recorder = useAudioRecorder();

  const renderStyle= ()=>{
      
  }
  return (
    <div>
      <AudioRecorder
        onRecordingComplete={setBlob}
        recorderControls={recorder}
      />

      {recorder.mediaRecorder && (
        <LiveAudioVisualizer
          mediaRecorder={recorder.mediaRecorder}
          width={200}
          height={100}
          barColor="red"
          shadowColor="yellow"
          barSpacing={100}
          barWidth={4}
          barHeight={12}
          renderStyle={}
        />
      )}

      {/* {blob && (
        <AudioVisualizer
          blob={blob}
          width={500}
          height={75}
          barWidth={1}
          gap={0}
          barColor={'red'}
        />
      )} */}

      {/* {blob && (
        <AudioVisualizer
          blob={blob}
          width={500}
          height={75}
          barWidth={3}
          gap={2}
          barColor={'lightblue'}
        />
      )} */}
    </div>
  );
}
