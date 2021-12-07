import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButton";
import { changeFontDetails } from "../../service/Actions/TextAction";
import "../style/textEditor.css";

const FontStyle = (props) => {
  const [formats, setFormats] = useState([]);

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setFormats([]);
      props.allText[props.CurrentText.index].fontWeight === "bold" &&
        setFormats((prevState) => [...prevState, "bold"]);
      props.allText[props.CurrentText.index].fontStyle === "italic" &&
        setFormats((prevState) => [...prevState, "italic"]);
      props.allText[props.CurrentText.index].fontDecoration === "underline" &&
        setFormats((prevState) => [...prevState, "underline"]);
    }
  }, [props.allText, props.CurrentText.index]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
    console.log(newFormats);
    props.changeFontDetails(props.CurrentText.index, newFormats);
  };

  return (
    <ToggleButtonGroup
      aria-label="text formatting"
      value={formats}
      onChange={handleFormat}
      sx={{ ml: 1 }}
      size="small"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underline" aria-label="underline">
        <FormatUnderlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

const mapStateToProps = (state) => ({
  BG: state.BGReducer,
  CurrentText: state.CurrentTextReducer,
  allText: state.TextReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeFontDetails: (index, details) =>
    dispatch(changeFontDetails(index, details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FontStyle);
