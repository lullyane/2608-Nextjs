"use client";
import React, { useState } from 'react';
import Box from './Box';

type PropsType = {
  text: string;
};

const StaticClientComponent = ({ text }: PropsType) => {
  const [counter, setCounter] = useState(0);
  const onClickCountUp = () => {
    setCounter(counter + 1);
  };
  return (
    <Box>
      <h2>Dynamic Server Component</h2>
      <p>{text}</p>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>{counter}</p>
    </Box>
  )
}

export default StaticClientComponent
