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

    case CHANGE_FONT_ALIGN:
      let new_option_fontAlign = {
        ...state[action.payload.index],
        fontAlign: action.payload.details,
      };

      let new_state_fontAlign = state.map((option, index) => {
        if (index !== action.payload.index) return option;
        else return new_option_fontAlign;
      });
      return new_state_fontAlign;

    case CHANGE_FONT_TRANSFORM:
      let new_option_fontTransform = {
        ...state[action.payload.index],
        fontTransform: action.payload.details,
      };

      let new_state_fontTransform = state.map((option, index) => {
        if (index !== action.payload.index) return option;
        else return new_option_fontTransform;
      });
      return new_state_fontTransform;

    case REMOVE_CURRENT_TEXT:
      console.log(action.payload);
      let new_state_textRemove = state.filter((option, index) => {
        console.log(option);
        console.log(index);
        if (index !== action.payload) return option;
      });

      console.log(new_state_textRemove);
      return new_state_textRemove;

    default:
      return state;
  }
}
