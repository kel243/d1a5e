import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
  imageGrid: {
    gap: '.5rem',
    width: '50%',
    flexWrap: 'wrap',
    marginTop: "5px",
    "& img": {
      width: "auto",
      borderRadius: '3px'
    }
  },
  singleImageText: {
    height: "5rem",
  },
  singleImageNoText: {
    height: "6rem",
  },
  multiImages: {
    height: "4rem",
  }
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();

  const determineImageType = () => {
    if(attachments.length === 1 && text !== "") {
      return classes.singleImageText
    } 

    if(attachments.length === 1 && text === "") {
      return classes.singleImageNoText
    }

    if(attachments.length > 1) {
      return classes.multiImages
    }
  }

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
        {attachments?.length > 0 && 
        <Grid className={classes.imageGrid} container>
          {attachments.map((attachment, i) => <img className={determineImageType()} key={`${time}-${i}`} src={attachment} alt="attached" />)}
        </Grid>
      }
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
