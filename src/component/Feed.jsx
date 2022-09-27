import React, {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {  } from '@mui/icons-material';

import SideBar from './SideBar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: {sx: 'column', md: 'row'}}}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sm: 0, md: '2px'}}}>
        <SideBar />

        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>Copyright 2022 MZS</Typography>
      </Box>
    </Stack>
  )
}

export default Feed