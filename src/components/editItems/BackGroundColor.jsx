import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { connect } from "react-redux";
import { changeFontBgColor } from "../../service/Actions/TextAction";
import { MenuItem, Select } from "@mui/material";

const BackGroundColor = (props) => {
  const [fontBgColor, setFontBgColor] = useState("");

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setFontBgColor(props.allText[props.CurrentText.index].fontBgColor);
    }
  }, [props.allText, props.CurrentText.index]);

  const handlerFontBgColorChange = (e) => {
    setFontBgColor(e.target.value);
    props.changeFontBgColor(props.CurrentText.index, e.target.value);
  };

  return (
    <FormControl sx={{ ml: 1, minWidth: 110 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">BG Color</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label="BG Color"
        value={fontBgColor}
        onChange={(e) => handlerFontBgColorChange(e)}
      >
        <MenuItem value="none">
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
  changeFontBgColor: (index, color) =>
    dispatch(changeFontBgColor(index, color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackGroundColor);
