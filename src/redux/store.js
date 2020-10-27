import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

let middleware = applyMiddleware(thunk);

// 判断是开发模式还是生产模式
if (process.env.NOOE_ENY === "development") {
  middleware = composeWithDevTools(middleware);
}

export default createStore(reducers, middleware);
