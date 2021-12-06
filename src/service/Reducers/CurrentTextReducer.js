import { CHANGE_CURRENT_TEXT, EMPTY_CURRENT_TEXT } from "../Constaints";

const initialState = { details: null, index: null };

export default function CurrentTextReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_TEXT:
      return {
        details: action.payload.details,
        index: action.payload.index,
      };

    case EMPTY_CURRENT_TEXT:
      return initialState;

    default:
      return state;
  }
}
