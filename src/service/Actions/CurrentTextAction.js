import { CHANGE_CURRENT_TEXT, EMPTY_CURRENT_TEXT } from "../Constaints";

export const changeCurrentText =
  (details, index) => async (dispatch, getState) => {
    dispatch({
      type: CHANGE_CURRENT_TEXT,
      payload: { details, index },
    });
  };

export const emptyCurrentText = (index) => async (dispatch, getState) => {
  dispatch({
    type: EMPTY_CURRENT_TEXT,
    payload: index,
  });
};
