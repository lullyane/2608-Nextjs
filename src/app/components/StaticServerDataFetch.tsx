import React from 'react'
import Box from './Box';

type Todo = {
  id: number;
  todo: string;
};

const StaticServerDataFetch = async () => {
  const res = await fetch('https://dummyjson.com/todos/random');
  const todo: Todo = await res.json();

  return (
    <Box>
      <h2>Static Server Data Fetch</h2>
      <dl>
        <dt>ID:</dt>
        <dd>{todo.id}</dd>
        <dt>Todo:</dt>
        <dd>{todo.todo}</dd>
      </dl>
    </Box>
  );
};

export default StaticServerDataFetch
