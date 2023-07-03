import React, { useState, useEffect } from 'react';
import {
  WaveformAudioRecorder,
  WaveformAudioRecorderType,
} from 'waveform-audio-recorder';

export default function WaveformTwo() {
  const [recorderState, setRecorderState] = useState(
    WaveformAudioRecorderType || null
  );
  //(useState < WaveformAudioRecorderType) | (null > null);

  useEffect(() => {
    console.log(recorderState);
  }, [recorderState]);
  return (
    <div className="App">
      <button
        onClick={
          recorderState?.initRecording? recorderState?.saveRecording: recorderState?.startRecording
        }
      >
        {recorderState?.initRecording ? 'Stop' : 'Start'}
      </button>

      <WaveformAudioRecorder setRecorderState={setRecorderState} />

      {recorderState?.recordingDuration}
    </div>
  );
}
