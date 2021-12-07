import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButton";
import { changeFontAlign } from "../../service/Actions/TextAction";
import "../style/textEditor.css";

const FontAlign = (props) => {
  const [alignFormats, setAlignFormats] = useState("");

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setAlignFormats(props.allText[props.CurrentText.index].fontAlign);
    }
  }, [props.allText, props.CurrentText.index]);

  const handleAlignFormet = (event, newAlignment) => {
    setAlignFormats(newAlignment);
    props.changeFontAlign(props.CurrentText.index, newAlignment);
  };

  const control = {
    value: alignFormats,
    onChange: handleAlignFormet,
  };

  return (
    <ToggleButtonGroup size="small" sx={{ ml: 1 }} {...control}>
      <ToggleButton value="left" key="left">
        <FormatAlignLeftIcon />
      </ToggleButton>
      ,
      <ToggleButton value="center" key="center">
        <FormatAlignCenterIcon />
      </ToggleButton>
      ,
      <ToggleButton value="right" key="right">
        <FormatAlignRightIcon />
      </ToggleButton>
      ,
      <ToggleButton value="justify" key="justify">
        <FormatAlignJustifyIcon />
      </ToggleButton>
      ,
    </ToggleButtonGroup>
  );
};

const mapStateToProps = (state) => ({
  BG: state.BGReducer,
  CurrentText: state.CurrentTextReducer,
  allText: state.TextReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeFontAlign: (index, details) =>
    dispatch(changeFontAlign(index, details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FontAlign);
