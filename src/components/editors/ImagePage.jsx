import React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Rnd } from "react-rnd";
import "../style/imagePage.css";
import { connect } from "react-redux";
import { changeCurrentText } from "../../service/Actions/CurrentTextAction";

const ImagePage = ({ setPhoto, photo, allText, changeCurrentText }) => {
  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  return !photo ? (
    <label htmlFor="icon-button-file" style={{ display: "flex" }}>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={(e) => handlePhotoChange(e)}
      />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera
          style={{
            justifyContent: "center",
            fontSize: "60px",
            color: "grey",
          }}
        />
      </IconButton>
    </label>
  ) : (
    <div
      style={{
        backgroundImage: `url(${photo})`,
        width: "100%",
        height: "100%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {allText &&
        allText.map((item, index) => (
          <Rnd
            default={{
              x: 100,
              y: 100,
              width: "200px",
            }}
            minWidth={70}
            minHeight={30}
            bounds="parent"
            className="rnd"
            key={index}
            onClick={() => changeCurrentText(item, index)}
          >
            <h3
              style={{
                fontSize: `${item.fontSize}px`,
                fontStyle: `${item.fontStyle}`,
                fontFamily: item.fontFamily,
                fontWeight: item.fontWeight,
                textDecoration: item.fontDecoration,
                color: item.fontColor,
              }}
            >
              {item.text}
            </h3>
          </Rnd>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  BG: state.BGReducer,
  allText: state.TextReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentText: (details, index) =>
    dispatch(changeCurrentText(details, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);
