import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
    },
    senderGrid: {
      justifyContent: 'flex-end',
    }
}));

const ImageGrid = ({ attachments, text, type }) => {
    const classes = useStyles();

    const determineImageSize = () => {
        if (attachments.length === 1 && text !== "") {
            return classes.singleImageText;
        }

        if (attachments.length === 1 && text === "") {
            return classes.singleImageNoText;
        }

        if (attachments.length > 1) {
            return classes.multiImages;
        }
    };

    return (
        <Grid className={`${classes.imageGrid} ${type === "sender" && classes.senderGrid}`} container>
            {attachments.map((attachment, i) => (
                <img className={determineImageSize()} key={`${i}`} src={attachment} alt="attached" />
            ))}
        </Grid>
    );
};

export default ImageGrid;
