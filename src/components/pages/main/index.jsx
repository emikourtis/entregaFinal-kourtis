import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'


const Main = () => {
  return (
    
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={1} aria-label="basic tabs example">
          <Tab label="Item One" value={1} />
          <Tab label="Item Two" value={2}/>
          <Tab label="Item Three" value={3}/>
        </Tabs>
      </Box>
      
    </Box>
    
  )
}

export default Main;
