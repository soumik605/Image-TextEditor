import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { connect } from "react-redux";
import { changeFontFamily } from "../../service/Actions/TextAction";
import { MenuItem, Select } from "@mui/material";

const FontFamily = (props) => {
  const [fontFamily, setFontFamily] = useState("");

  useEffect(() => {
    if (props.allText && props.CurrentText.index != null) {
      setFontFamily(props.allText[props.CurrentText.index].fontFamily);
    }
  }, [props.allText, props.CurrentText.index]);

  const handlerFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
    props.changeFontFamily(props.CurrentText.index, e.target.value);
  };

  return (
    <FormControl sx={{ ml: 1, minWidth: 130 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">Font Family</InputLabel>
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
  );
};

const mapStateToProps = (state) => ({
  BG: state.BGReducer,
  CurrentText: state.CurrentTextReducer,
  allText: state.TextReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeFontFamily: (index, family) =>
    dispatch(changeFontFamily(index, family)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FontFamily);
