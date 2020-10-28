import { createStore, applyMiddleware } from "redux";
// 引入异步操作（处理异步）
import thunk from "redux-thunk";
// 引入 将来需要调试 的一个方法 工具
import { composeWithDevTools } from "redux-devtools-extension";
// 引入reducers

import reducers from "./reducers";

let middleware = applyMiddleware(thunk);

// 判断是开发环境还是生产环境
// @ts-ignore
if (process.env.NOOE_ENY === "development") {
  middleware = composeWithDevTools(middleware);
}

export default createStore(reducers, middleware);
