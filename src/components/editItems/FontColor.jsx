import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { connect } from "react-redux";
import { changeFontColor } from "../../service/Actions/TextAction";
import { MenuItem, Select } from "@mui/material";

const FontColor = (props) => {
  const [fontColor, setFontColor] = useState("");

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setFontColor(props.allText[props.CurrentText.index].fontColor);
    }
  }, [props.allText, props.CurrentText.index]);

  const handlerFontColorChange = (e) => {
    setFontColor(e.target.value);
    props.changeFontColor(props.CurrentText.index, e.target.value);
  };

  return (
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
  );
};

const mapStateToProps = (state) => ({
  BG: state.BGReducer,
  CurrentText: state.CurrentTextReducer,
  allText: state.TextReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeFontColor: (index, color) => dispatch(changeFontColor(index, color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FontColor);
