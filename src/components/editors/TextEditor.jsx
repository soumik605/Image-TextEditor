import React, { useState, useEffect } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import {
  addText,
  changeFontSize,
  changeFontFamily,
  changeFontDetails,
  changeFontColor,
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
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import BlockIcon from "@mui/icons-material/Block";

const TextEditor = (props) => {
  const [text, setText] = useState("");
  const [size, setSize] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [formats, setFormats] = useState([]);
  const [alignFormats, setAlignFormats] = useState("");
  const [transformFormats, setTransformFormats] = useState("");

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setFontFamily(props.allText[props.CurrentText.index].fontFamily);
      setFontColor(props.allText[props.CurrentText.index].fontColor);
      setSize(props.allText[props.CurrentText.index].fontSize);
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

  const addTextHandler = () => {
    setText("");
    props.addText(text);
  };

  const handlerFontChange = async (e) => {
    setSize(e.target.value);
    await props.changeFontSize(props.CurrentText.index, e.target.value);
  };

  const handlerFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
    props.changeFontFamily(props.CurrentText.index, e.target.value);
  };

  const handlerFontColorChange = (e) => {
    setFontColor(e.target.value);
    props.changeFontColor(props.CurrentText.index, e.target.value);
  };

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
      <TextField
        id="standard-basic"
        label="Write any text"
        variant="standard"
        className="textField"
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="small"
      />
      <Button variant="contained" onClick={addTextHandler} size="small">
        Add
      </Button>

      <FormControl sx={{ ml: 1, p: 0, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-helper-label">Font Size</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Font Size"
          value={size}
          onChange={(e) => handlerFontChange(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={36}>36</MenuItem>
          <MenuItem value={48}>48</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={72}>72</MenuItem>
          <MenuItem value={96}>96</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ ml: 1, minWidth: 130 }} size="small">
        <InputLabel id="demo-simple-select-helper-label">
          Font Family
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Font Family"
          value={fontFamily}
          onChange={(e) => handlerFontFamilyChange(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Arial"}>Arial</MenuItem>
          <MenuItem value={"monospace"}>Monospace</MenuItem>
          <MenuItem value={"serif"}>Serif</MenuItem>
          <MenuItem value={"cursive"}>Cursive</MenuItem>
          <MenuItem value={"fantasy"}>Fantasy</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ ml: 1, minWidth: 100 }} size="small">
        <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Font Color"
          value={fontColor}
          onChange={(e) => handlerFontColorChange(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"white"} style={{ color: "lightgrey" }}>
            White
          </MenuItem>
          <MenuItem value={"black"}>Black</MenuItem>
          <MenuItem value={"red"} style={{ color: "red" }}>
            Red
          </MenuItem>
          <MenuItem value={"blue"} style={{ color: "blue" }}>
            Blue
          </MenuItem>
          <MenuItem value={"yellow"} style={{ color: "yellow" }}>
            Yellow
          </MenuItem>
          <MenuItem value={"green"} style={{ color: "green" }}>
            Green
          </MenuItem>
        </Select>
      </FormControl>

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
  addText: (text) => dispatch(addText(text)),
  changeFontSize: (index, size) => dispatch(changeFontSize(index, size)),
  changeFontFamily: (index, family) =>
    dispatch(changeFontFamily(index, family)),
  changeFontDetails: (index, details) =>
    dispatch(changeFontDetails(index, details)),
  changeFontColor: (index, color) => dispatch(changeFontColor(index, color)),
  changeFontAlign: (index, details) =>
    dispatch(changeFontAlign(index, details)),
  changeFontTransform: (index, details) =>
    dispatch(changeFontTransform(index, details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
