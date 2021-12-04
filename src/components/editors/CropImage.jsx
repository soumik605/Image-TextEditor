import React, { useState } from "react";
import {
  Close,
  Container,
  LeftDiv,
  Main,
  PopupBox,
  RightDiv,
} from "../style/cropStyle";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ReactCrop from "react-image-crop";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import Crop54Icon from "@mui/icons-material/Crop54";
import Crop169Icon from "@mui/icons-material/Crop169";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import "react-image-crop/dist/ReactCrop.css";
import { Button } from "@mui/material";

const CropImage = (props) => {
  const [crop, setCrop] = useState(null);
  const [image, setImage] = useState(null);

  const getCroppedImg = () => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const data = canvas.toDataURL("image/jpeg");
    props.setPhoto(data);
    props.model(false);
  };

  return (
    <Container>
      <ClickAwayListener onClickAway={() => props.model(false)}>
        <PopupBox>
          <Close onClick={() => props.model(false)}>X</Close>

          <Main>
            <LeftDiv>
              <ReactCrop
                src={props.photo}
                crop={crop}
                onChange={setCrop}
                onImageLoaded={setImage}
              />
            </LeftDiv>
            <RightDiv>
              <Button
                onClick={() => setCrop(null)}
                variant="outlined"
                startIcon={<CropSquareIcon />}
              >
                Custom
              </Button>
              <Button
                onClick={() => setCrop({ aspect: 1 / 1 })}
                variant="outlined"
                startIcon={<CropSquareIcon />}
              >
                1 : 1
              </Button>
              <Button
                onClick={() => setCrop({ aspect: 3 / 2 })}
                variant="outlined"
                startIcon={<Crop54Icon />}
              >
                3 : 2
              </Button>
              <Button
                onClick={() => setCrop({ aspect: 16 / 9 })}
                variant="outlined"
                startIcon={<Crop169Icon />}
              >
                16 : 9
              </Button>
              <Button
                onClick={() => setCrop({ aspect: 9 / 16 })}
                variant="outlined"
                startIcon={<CropPortraitIcon />}
              >
                9 : 16
              </Button>
              <Button
                variant="contained"
                color="success"
                style={{ marginTop: "auto" }}
                onClick={getCroppedImg}
              >
                Save
              </Button>
            </RightDiv>
          </Main>
        </PopupBox>
      </ClickAwayListener>
    </Container>
  );
};

export default CropImage;
