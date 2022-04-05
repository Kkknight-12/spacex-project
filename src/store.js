import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import spacexReducer from "./reducers/spacexReducer";

const reducer = combineReducers({
  spacexReducer: spacexReducer,
});

const initialState = {
  //   sidebarShow: true,
  // sideBar: {},
};

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       // console.log('changeState', state)
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
