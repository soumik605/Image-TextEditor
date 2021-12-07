import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { connect } from "react-redux";
import { changeBorderColor } from "../../service/Actions/TextAction";
import { MenuItem, Select } from "@mui/material";

const BorderColor = (props) => {
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setBorderColor(props.allText[props.CurrentText.index].borderColor);
    }
  }, [props.allText, props.CurrentText.index]);

  const handlerBorderColorChange = (e) => {
    setBorderColor(e.target.value);
    props.changeBorderColor(props.CurrentText.index, e.target.value);
  };

  return (
    <FormControl sx={{ ml: 1, minWidth: 135 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">Border Color</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label="Border Color"
        value={borderColor}
        onChange={(e) => handlerBorderColorChange(e)}
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
  changeBorderColor: (index, color) =>
    dispatch(changeBorderColor(index, color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BorderColor);
