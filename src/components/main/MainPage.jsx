import React, { useState } from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../service/Actions/BGActions";
import ImageEditor from "../editors/ImageEditor";
import SliderPage from "../SliderPage";
import "../style/main.css";
import Crop from "@mui/icons-material/Crop";
import ImagePage from "../editors/ImagePage";
import CropImage from "../editors/CropImage";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextEditor from "../editors/TextEditor";

function MainPage(props) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [openCropModel, setOpenCropModel] = useState(false);
  const selectedOption = props.BG[selectedOptionIndex];
  const [photo, setPhoto] = useState(null);

  const handleSliderChange = ({ target }) => {
    const value = target.value;
    props.changeFilter(selectedOptionIndex, value);
  };

  const getImageStyle = () => {
    if (photo) {
      const filters = props.BG.map((option) => {
        return `${option.property}(${option.value}${option.unit})`;
      });
      return { filter: filters.join(" ") };
    }
  };

  return (
    <>
      {openCropModel && photo && (
        <CropImage model={setOpenCropModel} photo={photo} setPhoto={setPhoto} />
      )}
      <div className="container">
        <div className="text-editor">
          <TextEditor />
        </div>

        <div className="main-image" style={getImageStyle()}>
          <ImagePage setPhoto={setPhoto} photo={photo} />
        </div>
        <div className="slider">
          <SliderPage
            selectedOption={selectedOption}
            handleChange={handleSliderChange}
          />
        </div>
        <div className="edit-items">
          <button className="crop-btn" onClick={() => setOpenCropModel(true)}>
            <Crop />
            <h4>Crop</h4>
          </button>
          {props.BG.map((filter, index) => {
            return (
              <ImageEditor
                key={index}
                index={index}
                filter={filter}
                active={index === selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  BG: state.BGReducer,
  CurrentText: state.CurrentTextReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (selectedOptionIndex, value) =>
    dispatch(changeFilter(selectedOptionIndex, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
