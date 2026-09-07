import React from 'react';
import Box from './Box';

type PropsType = {
  text: string;
};

const StaticServerComponent = async ({ text }: PropsType) => {
  return (
    <Box>
      <h2>Static Server Component</h2>
      <p>{text}</p>
    </Box>
  )
};

export default StaticServerComponent
