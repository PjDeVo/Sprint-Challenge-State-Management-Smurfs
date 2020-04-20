import { FETCH_SMURFS, GOT_SMURFS, ADD_SMURFS } from "../actions";

const initialState = {
  smurfs: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
      };
    case GOT_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
      };

    case ADD_SMURFS:
      return {
        ...state,
        smurfs: [...state.smurfs],
      };
    default:
      return state;
  }
};
