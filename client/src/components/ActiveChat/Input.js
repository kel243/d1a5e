import React, { useState } from 'react';
import { FormControl, FilledInput, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {ReactComponent as FileIcon} from "../../assets/file.svg"

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  fileButton: {
    position: 'absolute',
    right: '3.5rem',
    bottom: '0',
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
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setText('');
  };

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
      <label class={classes.root} className={classes.fileButton}>
          <input type="file" className={classes.fileInput}/>
          <FileIcon />
      </label>
    </form>
  );
};

export default Input;
