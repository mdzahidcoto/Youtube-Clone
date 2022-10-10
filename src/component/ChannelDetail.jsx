import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./index.js";
import { fetchFromAPI } from "../utilities/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideo] = useState([]);

  // console.log(channelDetail, video)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data)
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideo(data?.items)
    );
  }, [id]);

  return (
    <div>
      <Box minHeight="95vh">
        <Box sx={{ margin: 'auto', justifyContent: 'between' }}>
          <div
            style={{
              height: "300px",
              background:
                "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        </Box>
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={video} />
        </Box>
      </Box>
    </div>
  );
};

export default ChannelDetail;
