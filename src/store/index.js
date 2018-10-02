import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  red: 10,
  green: 72,
  blue: 129,
  alpha: 1.0,
  //shape: 'circle'
};
export const store = createStore(reducer, initialState);