import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
  },
  imageGrid: {
    justifyContent: 'flex-end',
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

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();

  const determineImageType = () => {
    if(attachments.length === 1 && text !== "") {
      return classes.singleImageText
    } 

    if(attachments.length === 1 && text == "") {
      return classes.singleImageNoText
    }

    if(attachments.length > 1) {
      return classes.multiImages
    }
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>
      {attachments?.length > 0 && 
        <Grid className={classes.imageGrid} container>
          {attachments.map((attachment, i) => <img className={determineImageType()} key={`${time}-${i}`} src={attachment} alt="attached" />)}
        </Grid>
      }
    </Box>
  );
};

export default SenderBubble;
