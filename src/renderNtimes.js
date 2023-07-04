import React, { useState, useEffect } from 'react';

export default function Renderntimes() {
  let [normal, setNormal] = useState(1);
  let [colored, setColored] = useState(0);

  function Normal() {
    return <span>Normal</span>;
  }

  function Colored() {
    return <span>Colored</span>;
  }

  let animation = [];

  function NormalPrint() {
    // for (let index = 0; index < normal; index++) {
    //   animation.push(<Colored key={index} />);
    // }
    console.log('eoo;');
  }

  useEffect(() => {
    NormalPrint;
  }, []);

  return <>{animation}</>;
}
