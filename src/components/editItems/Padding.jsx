import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { connect } from "react-redux";
import {  changePadding } from "../../service/Actions/TextAction";
import { MenuItem, Select } from "@mui/material";

const Padding = (props) => {
  const [padding, setPadding] = useState("");

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setPadding(props.allText[props.CurrentText.index].padding);
    }
  }, [props.allText, props.CurrentText.index]);

  const handlerPaddingChange = (e) => {
    setPadding(e.target.value);
    props.changePadding(props.CurrentText.index, e.target.value);
  };

  return (
    <FormControl sx={{ ml: 1, p: 0, minWidth: 100 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">Padding</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label="Padding"
        value={padding}
        onChange={(e) => handlerPaddingChange(e)}
      >
        <MenuItem value={0}>
          <em>0</em>
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
    changePadding: (index, padding) => dispatch(changePadding(index, padding)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Padding);
  
