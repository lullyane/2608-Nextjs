import { cookies } from 'next/headers';
import React from 'react';
import Box from './Box';
import { text } from 'stream/consumers';

type PropsType = {
  text: string;
};

const dynamicServercomponent = async ({ text }: PropsType) => {
  const cookieStore = await cookies();
  const username = cookieStore.get('username')?.value ?? 'ゲスト';
  return (
    <Box>
      <h2>Dynamic Server Component</h2>
      <p>{text}</p>
      <p>名前： {username}</p>
    </Box>
  )
}

export default dynamicServercomponent
