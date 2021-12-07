import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { connect } from "react-redux";
import { changeFontSize } from "../../service/Actions/TextAction";
import { MenuItem, Select } from "@mui/material";

const FontSize = (props) => {
  const [size, setSize] = useState("");

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setSize(props.allText[props.CurrentText.index].fontSize);
    }
  }, [props.allText, props.CurrentText.index]);

  const handlerFontChange = (e) => {
    setSize(e.target.value);
    props.changeFontSize(props.CurrentText.index, e.target.value);
  };

  return (
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
  );
};

const mapStateToProps = (state) => ({
  BG: state.BGReducer,
  CurrentText: state.CurrentTextReducer,
  allText: state.TextReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeFontSize: (index, size) => dispatch(changeFontSize(index, size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FontSize);
