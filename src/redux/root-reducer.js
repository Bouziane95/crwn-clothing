import { combineReducers } from "redux";
import userReducer from "../redux/user.reducer";
import cartReducer from "../redux/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
