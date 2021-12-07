import React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import "../style/imagePage.css";
import { connect } from "react-redux";
import DragDiv from "./DragDiv";

const ImagePage = ({ setPhoto, photo, allText }) => {

  
  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  return !photo ? (
    <label htmlFor="icon-button-file" className="input-label">
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={(e) => handlePhotoChange(e)}
      />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera
          style={{ justifyContent: "center", fontSize: "60px", color: "grey" }}
        />
      </IconButton>
    </label>
  ) : (
    <div
      style={{
        backgroundImage: `url(${photo})`,
      }}
      className="Image-Container"
    >
      {allText &&
        allText.map((item, index) => (
          <DragDiv item={item} index={index} key={index} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  BG: state.BGReducer,
  allText: state.TextReducer,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);
