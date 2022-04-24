import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import ImageGrid from "./ImageGrid";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginBottom: "2rem",
    },
    date: {
        fontSize: 11,
        color: "#BECCE2",
        fontWeight: "bold",
        marginBottom: 5,
    },
    text: {
        fontSize: 14,
        color: "#91A3C0",
        letterSpacing: -0.2,
        padding: 8,
        fontWeight: "bold",
    },
    bubble: {
        background: "#F4F6FA",
        borderRadius: "10px 10px 0 10px",
    },
}));

const SenderBubble = ({ time, text, attachments }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.date}>{time}</Typography>
            {attachments?.length === 1 && <ImageGrid attachments={attachments} text={text} time={time} type="sender"/>}
            <Box className={classes.bubble}>
                <Typography className={classes.text}>{text}</Typography>
            </Box>
            {attachments?.length > 1 && <ImageGrid attachments={attachments} text={text} time={time} type="sender"/>}
        </Box>
    );
};

export default SenderBubble;
