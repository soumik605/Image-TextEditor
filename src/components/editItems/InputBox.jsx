import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { connect } from "react-redux";
import { addText } from "../../service/Actions/TextAction";
import "../style/textEditor.css";

const InputBox = (props) => {
  const [text, setText] = useState("");

  const addTextHandler = () => {
    setText("");
    props.addText(text);
  };

  return (
    <>
      <TextField
        id="standard-basic"
        label="Write any text"
        variant="standard"
        className="textField"
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="small"
        sx={{ ml: 1, minWidth: 130 }}
      />
      <Button variant="contained" onClick={addTextHandler} size="small">
        Add
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  BG: state.BGReducer,
  CurrentText: state.CurrentTextReducer,
  allText: state.TextReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addText: (text) => dispatch(addText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);
