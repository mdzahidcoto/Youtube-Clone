import React from 'react';

import {VideoCard, ChannelCard, Loader} from './';
import { Stack, Box } from '@mui/material';

const Videos = ({videos, direction}) => {
    // console.log(videos)
    if(!videos?.length) return <Loader />;

  return (
    <Stack direction={ direction || 'row' } sx={{ display: 'flex', gap: 1, flexWrap: 'wrap'}} justifyContent='start'>
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