import React, { useState, useEffect } from "react";
import {
  changeFontDetails,
  changeFontAlign,
  changeFontTransform,
} from "../../service/Actions/TextAction";
import { connect } from "react-redux";
import "../style/textEditor.css";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import BlockIcon from "@mui/icons-material/Block";

import InputBox from "../editItems/InputBox";
import FontSize from "../editItems/FontSize";
import FontFamily from "../editItems/FontFamily";
import FontColor from "../editItems/FontColor";
import BackGroundColor from "../editItems/BackGroundColor";
import Padding from "../editItems/Padding";
import BorderColor from "../editItems/BorderColor";

const TextEditor = (props) => {
  const [formats, setFormats] = useState([]);
  const [alignFormats, setAlignFormats] = useState("");
  const [transformFormats, setTransformFormats] = useState("");

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setAlignFormats(props.allText[props.CurrentText.index].fontAlign);
      setTransformFormats(props.allText[props.CurrentText.index].fontTransform);
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
    props.changeFontDetails(props.CurrentText.index, newFormats);
  };

  const handleAlignFormet = (event, newAlignment) => {
    setAlignFormats(newAlignment);
    props.changeFontAlign(props.CurrentText.index, newAlignment);
  };

  const handleTransformFormet = (event, result) => {
    setTransformFormats(result);
    props.changeFontTransform(props.CurrentText.index, result);
  };

  const control = {
    value: alignFormats,
    onChange: handleAlignFormet,
    exclusive: true,
  };

  const transformControl = {
    value: transformFormats,
    onChange: handleTransformFormet,
    exclusive: true,
  };

  return (
    <div className="text-tools">
      <InputBox />
      <FontSize />
      <FontFamily />
      <FontColor />
      <BackGroundColor />
      <Padding />
      <BorderColor />

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

      <ToggleButtonGroup size="small" sx={{ ml: 1 }} {...transformControl}>
        <ToggleButton value="none" key="none" style={{ textTransform: "none" }}>
          <BlockIcon />
        </ToggleButton>
        ,
        <ToggleButton
          value="uppercase"
          key="uppercase"
          style={{ textTransform: "none" }}
        >
          AB
        </ToggleButton>
        ,
        <ToggleButton
          value="lowercase"
          key="lowercase"
          style={{ textTransform: "none" }}
        >
          ab
        </ToggleButton>
        ,
        <ToggleButton
          value="capitalize"
          key="capitalize"
          style={{ textTransform: "none" }}
        >
          Ab
        </ToggleButton>
        ,
      </ToggleButtonGroup>
    </div>
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
  changeFontAlign: (index, details) =>
    dispatch(changeFontAlign(index, details)),
  changeFontTransform: (index, details) =>
    dispatch(changeFontTransform(index, details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
