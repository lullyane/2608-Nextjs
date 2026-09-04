import Box from '@/app/components/Box'
import DynamicServerComponent from '@/app/components/dynamicServercomponent'
import StaticClientComponent from '@/app/components/StaticClientComponent'
import React from 'react'

const DynamicRenderingPage = () => {
  return <Box>
    <h1>Dynamic Rendering Page</h1>
    <DynamicServerComponent text="Dynamic Server Component への Props" />
    <StaticClientComponent text="Static Client Component への Props" />
  </Box>
}

export default DynamicRenderingPage
