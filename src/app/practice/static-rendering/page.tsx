import Box from '@/app/components/Box'
import StaticServerComponent from '@/app/components/StaticServerComponent'
import StaticClientComponent from '@/app/components/StaticClientComponent'
import React from 'react'

const StaticRenderingPage = () => {
  return <Box>
    <h1>Static Rendering Page</h1>
    <StaticServerComponent text="Static Server Component への Props" />
    <StaticClientComponent text="Static Client Component への Props" />
  </Box>
}

export default StaticRenderingPage
