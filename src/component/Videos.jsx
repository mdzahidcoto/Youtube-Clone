import React from 'react';

import {VideoCard, ChannelCard} from './';
import { Stack, Box } from '@mui/material';

const Videos = ({videos}) => {
    // console.log(videos)
  return (
    <Stack direction='row' sx={{ display: 'flex', gap: 1, flexWrap: 'wrap'}} justifyContent='start'>
        {videos.map((items, idx) => (
            <Box key={idx} >
                {items.id.videoId && <VideoCard video={items} />}
                {items.id.channelId && <ChannelCard channelDetails={items} />}
            </Box>
  ))}
    </Stack>
  )
}

export default Videos