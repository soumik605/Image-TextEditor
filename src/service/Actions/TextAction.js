import {
  ADD_TEXT,
  CHANGE_FONT_ALIGN,
  CHANGE_FONT_COLOR,
  CHANGE_FONT_DETAILS,
  CHANGE_FONT_FAMILY,
  CHANGE_FONT_SIZE,
  CHANGE_FONT_TRANSFORM,
  REMOVE_CURRENT_TEXT,
} from "../Constaints";

export const addText = (details) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TEXT,
    payload: {
      text: details,
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "normal",
      fontFamily: "Arial",
      fontDecoration: "none",
      fontColor: "black",
      fontAlign: "left",
      fontTransform: "none"
    },
  });
};

export const changeFontSize = (index, size) => async (dispatch, getState) => {
  dispatch({
    type: CHANGE_FONT_SIZE,
    payload: {
      index,
      size,
    },
  });
};

export const changeFontColor = (index, color) => async (dispatch, getState) => {
  dispatch({
    type: CHANGE_FONT_COLOR,
    payload: {
      index,
      color,
    },
  });
};

export const changeFontDetails =
  (index, details) => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_FONT_DETAILS,
      payload: {
        index,
        details,
      },
    });
  };

export const changeFontFamily =
  (index, family) => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_FONT_FAMILY,
      payload: {
        index,
        family,
      },
    });
  };

export const changeFontAlign =
  (index, details) => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_FONT_ALIGN,
      payload: {
        index,
        details,
      },
    });
  };

export const changeFontTransform =
  (index, details) => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_FONT_TRANSFORM,
      payload: {
        index,
        details,
      },
    });
  };

export const removeCurrentText = (index) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CURRENT_TEXT,
    payload: index,
  });
};
