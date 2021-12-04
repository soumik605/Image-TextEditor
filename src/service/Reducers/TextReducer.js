import {
  ADD_TEXT,
  CHANGE_FONT_COLOR,
  CHANGE_FONT_DETAILS,
  CHANGE_FONT_FAMILY,
  CHANGE_FONT_SIZE,
} from "../Constaints";

const initialState = [];

export default function TextReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TEXT:
      return [...state, action.payload];

    case CHANGE_FONT_SIZE:
      let new_option = {
        ...state[action.payload.index],
        fontSize: action.payload.size,
      };
      let new_state = state.map((option, index) => {
        if (index !== action.payload.index) return option;
        else return new_option;
      });
      return new_state;

    case CHANGE_FONT_FAMILY:
      let new_option_fontFamily = {
        ...state[action.payload.index],
        fontFamily: action.payload.family,
      };
      let new_state_fontFamily = state.map((option, index) => {
        if (index !== action.payload.index) return option;
        else return new_option_fontFamily;
      });
      return new_state_fontFamily;

    case CHANGE_FONT_COLOR:
      let new_option_fontColor = {
        ...state[action.payload.index],
        fontColor: action.payload.color,
      };
      let new_state_fontColor = state.map((option, index) => {
        if (index !== action.payload.index) return option;
        else return new_option_fontColor;
      });
      return new_state_fontColor;

    case CHANGE_FONT_DETAILS:
      let new_option_fontDetails = {
        ...state[action.payload.index],
        fontStyle: action.payload.details.includes("italic")
          ? "italic"
          : "normal",
        fontWeight: action.payload.details.includes("bold") ? "bold" : "normal",
        fontDecoration: action.payload.details.includes("underline")
          ? "underline"
          : "none",
      };

      let new_state_fontDetails = state.map((option, index) => {
        if (index !== action.payload.index) return option;
        else return new_option_fontDetails;
      });
      return new_state_fontDetails;

    default:
      return state;
  }
}
