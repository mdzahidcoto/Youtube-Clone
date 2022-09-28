import React from "react";
import { Link } from "react-router-dom";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import demoProfilePicture from "../utilities/images/logo.svg";

const ChannelCard = ({ channelDetails }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: 'auto'
    }}
  >
    <Link to={`/channel/${channelDetails?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
            channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetails?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="h6">
          {channelDetails?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: "gary", ml: "5px" }} />
        </Typography>

        {channelDetails?.snippet?.subscriberCount && (
          <Typography>
            {parseInt(channelDetails?.snippet?.subscriberCount)}
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
