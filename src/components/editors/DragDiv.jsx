import React, { useState } from "react";
import { connect } from "react-redux";
import { Rnd } from "react-rnd";
import "../style/dragDiv.css";
import {
  changeCurrentText,
  emptyCurrentText,
} from "../../service/Actions/CurrentTextAction";
import { removeCurrentText } from "../../service/Actions/TextAction";

const DragDiv = ({
  item,
  index,
  changeCurrentText,
  removeCurrentText,
  emptyCurrentText,
}) => {
  const closeDiv = () => {
    emptyCurrentText(index);
    removeCurrentText(index);
  };
  return (
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
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ overflow: "hidden", paddingRight: "10px", width: "100%" }}
        onClick={() => changeCurrentText(item, index)}
      >
        <h3
          style={{
            fontSize: `${item.fontSize}px`,
            fontStyle: `${item.fontStyle}`,
            fontFamily: item.fontFamily,
            fontWeight: item.fontWeight,
            textDecoration: item.fontDecoration,
            textAlign: item.fontAlign,
            textTransform: item.fontTransform,
            color: item.fontColor,
          }}
        >
          {item.text}
        </h3>
      </div>

      <button className="CloseBtn" onClick={closeDiv}>
        X
      </button>
    </Rnd>
  );
};

const mapStateToProps = (state) => ({
  allText: state.TextReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentText: (details, index) =>
    dispatch(changeCurrentText(details, index)),
  removeCurrentText: (index) => dispatch(removeCurrentText(index)),
  emptyCurrentText: (index) => dispatch(emptyCurrentText(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DragDiv);
