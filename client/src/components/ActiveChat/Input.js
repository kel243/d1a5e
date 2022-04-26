import React, { useState } from 'react';
import { FormControl, FilledInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {ReactComponent as FileIcon} from "../../assets/file.svg"
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
    position: 'relative'
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  fileButton: {
    position: 'absolute',
    right: '2rem',
    bottom: '2.25rem',
    backgroundColor: "transparent",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
      "& svg path": {
        fill: "#000"
      }
    }
  },
  fileInput: {
    display: "none"
  },
  imageCount: {
    position: "absolute",
    top: '-6px',
    right: '-6px',
    width: '20px',
    height: '20px',
    background: theme.palette.primary.main,
    color: '#fff',
    fontSize: '13px',
    borderRadius: '10rem',
    textAlign: 'center'
  }
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);

  const url = "https://api.cloudinary.com/v1_1/demo/image/upload";

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;

    // Deletes text after submitting to prevent user from submitting the same message multiple times while the upload process happens
    const tempText = formElements.text.value
    setText('');


    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.

    const attachments = await uploadImages();

    const reqBody = {
      text: tempText,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments
    };
    
    await postMessage(reqBody);
  };

  const uploadImages = async () => {
    const urlArray = [];
    const promisesArray = [];
    // Deletes images after submitting to prevent user from submitting the same message multiple times while the upload process happens
    const tempImages = images;
    setImages([])

    tempImages.forEach((image) => {
      promisesArray.push(getImageUrl(image, urlArray));
    })

    await Promise.all(promisesArray);

    return urlArray
  }

  const getImageUrl = async (file, urlArray) => {
    try {
      const instance = axios.create()
      
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESENT);

      const response = await instance.post(url, formData)

      urlArray.push(response.data.url)
    } catch (e) {
      console.error(e)
    }
    
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
      </FormControl>
      <label className={classes.fileButton}>
        <input type="file" multiple accept="image/*" className={classes.fileInput} onChange={(e) => setImages([...e.target.files])}/>
        <FileIcon />
        {
          images.length > 0 && <span className={classes.imageCount}>{images.length}</span>
        }
      </label>
    </form>
  );
};

export default Input;
