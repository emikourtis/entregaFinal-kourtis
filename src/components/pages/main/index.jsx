import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'


const Main = () => {
  return (
    
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={1} aria-label="basic tabs example">
          <Tab label="Productos 1" value={1} />
          <Tab label="Productos 2" value={2}/>
          <Tab label="Productos 3" value={3}/>
        </Tabs>
      </Box>
      
    </Box>
    
  )
}

export default Main;
