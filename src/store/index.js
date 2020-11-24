import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer, ['Countries'])

export default store
