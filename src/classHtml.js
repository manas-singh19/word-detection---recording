import React from 'react';
import importScript from './customHook';
const Demo = (props) => {
  importScript('./class.js');
};

export default function ClassHTML() {
  return (
    <main>
      <button onclick="init()">start</button>
    </main>
  );
}
