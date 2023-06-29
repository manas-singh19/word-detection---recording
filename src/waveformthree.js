import React from 'react';
import styled from 'styled-components';
import Waveform from './component/waveformthreeCOMP.js';
import Song from './song.mp3';

const WaveformThree = () => {
  return (
    <main style={{ padding: '16px' }}>
      <h1>WaveSurfer Demo</h1>
      <Waveform audio={Song} />
    </main>
  );
};

export default WaveformThree;
