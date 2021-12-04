import React, { useState, useEffect } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import {
  addText,
  changeFontSize,
  changeFontFamily,
  changeFontDetails,
  changeFontColor,
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

const TextEditor = (props) => {
  const [text, setText] = useState("");
  const [size, setSize] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontWeight, setFontWeight] = useState("normal");
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontDecoration, setFontDecoration] = useState("none");
  const [formats, setFormats] = useState([]);

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setFontFamily(props.allText[props.CurrentText.index].fontFamily);
      setFontStyle(props.allText[props.CurrentText.index].fontStyle);
      setFontWeight(props.allText[props.CurrentText.index].fontWeight);
      setFontDecoration(props.allText[props.CurrentText.index].fontDecoration);
      setFontColor(props.allText[props.CurrentText.index].fontColor);
      setSize(props.allText[props.CurrentText.index].fontSize);
      setFormats([])

      if(props.allText[props.CurrentText.index].fontWeight === "bold"){
        setFormats(prevState => [...prevState, "bold"])
      }
      if(props.allText[props.CurrentText.index].fontStyle === "italic"){
        setFormats(prevState => [...prevState, "italic"])
      }
      if(props.allText[props.CurrentText.index].fontDecoration === "underline"){
        setFormats(prevState => [...prevState, "underline"])
      }

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

  return (
    <div className="text-tools">
      <TextField
        id="standard-basic"
        label="Write any text"
        variant="standard"
        style={{ padding: "0px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" onClick={addTextHandler}>
        Add
      </Button>

      <FormControl sx={{ ml: 1, p: 0, minWidth: 120 }}>
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

      <FormControl sx={{ ml: 1, minWidth: 130 }}>
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

      <FormControl sx={{ ml: 1, minWidth: 100 }}>
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
        aria-label="text formatting"
        sx={{ ml: 1 }}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
