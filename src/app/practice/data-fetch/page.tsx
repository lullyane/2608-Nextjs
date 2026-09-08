import Box from '@/app/components/Box'
import StaticServerDataFetch from '@/app/components/StaticServerDataFetch'
import ClientDataFetch from '@/app/components/ClientDataFetch'
import React from 'react'



const DataFetchPage = () => {
  return (
    <Box>
      <h1>Data Fetch Page</h1>
      <StaticServerDataFetch />
      <ClientDataFetch />
    </Box>
  )
}

export default DataFetchPage
