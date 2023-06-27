import React, { useEffect, useState, useRef } from 'react';

import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

export default function STT() {
  // -------------------------------------------------------------------
  // audio recoeding modles
  // -------------------------------------------------------------------
  const [url, setURL] = useState();
  const [audioBase64, setAudioBase64] = useState('');

  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );

  const reader = new FileReader();

  const addAudioElement = (blob) => {
    setURL(blob); // save blob
    console.log(blob);
    // base64 conversion
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      console.log(base64data);
      setAudioBase64(base64data); // save base64
    };

    // comment the below 5 lines of code
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  // -------------------------------------------------------------------
  // detection
  // -------------------------------------------------------------------
  const [value, setValue] = useState('');
  let [counter, setCounter] = useState(0);
  let tempstr = '';
  let prevstr = '';
  let tstring = '';
  let ifRam = '';
  let samcc = 0;

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      tempstr = result.replace(prevstr, ' ');
      console.log(tempstr);
      tstring = tempstr.split(' ');

      console.log('tstring--- ', tstring.slice(-1));
      ifRam = tstring.slice(-1);
      if (ifRam == 'Ram') {
        samcc = samcc + 1;
        setCounter(counter++);
      } else {
        console.log('timmer stop here 1s');
        recorderControls.stopRecording();
        stop();
      }
      console.log(samcc);
      result = '';
    },
  });

  // -- useeffect
  // const [timmer, setTimmer] = useState(0);
  // useEffect(() => {
  //   setTimmer(recorderControls.recordingTime);
  //   if (recorderControls.recordingTime == 5) {
  //     console.log('timmer stop here');
  //     recorderControls.stopRecording();
  //     stop();
  //   }
  // }, [recorderControls.recordingTime]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <textarea
        value={value}
        rows={10}
        cols={12}
        className="mt-5"
        style={{ width: '90%', display: 'none' }}
        onChange={(event) => setValue(event.target.value)}
      />
      <h1>Cout: {counter}</h1>
      <button
        className="btn-link mt-3 mb-3"
        style={{ marginBottom: '10px' }}
        onClick={() => {
          listen();
          recorderControls.startRecording();
        }}
      >
        Start
      </button>
      <button className="btn-link mt-3 mb-3" onClick={stop}>
        stop
      </button>

      {/* <button
        className="btn-link mt-3 mb-3"
        onClick={recorderControls.startRecording}
      >
        start audio
      </button>
      <button
        className="btn-link mt-3 mb-3"
        onClick={recorderControls.stopRecording}
      >
        stop audio
      </button> */}
      {listening && <div>Go ahead I'm listening</div>}

      <span style={{ marginTop: '20px' }}>
        -- {recorderControls.recordingTime} --
      </span>
      <div style={{ display: 'none' }}>
        <AudioRecorder
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
          // downloadOnSavePress={true}
          // downloadFileExtension="mp3"
          showVisualizer={true}
        />
      </div>
    </div>
  );
}
