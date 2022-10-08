import React, { useState, useEffect } from 'react'
import { useParams} from "react-router-dom";
import { Box } from '@mui/material';

import { videos, channelCard } from './index.js';
import { fetchFromAPI } from '../utilities/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();
  const [ channelDetail, setChannelDetail ] = useState(null);
  const [ video, setVideo ] = useState([]);

  // console.log(channelDetail, video)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
     .then((data) => setChannelDetail(data))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
     .then((data) => setVideo(data?.items))
  }, [id])
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail