import "./style.css"
import {
  legacy_createStore
} from "redux";

// 获取 DOM
const counterDom = document.querySelector("#counter")
const incrementDom = document.querySelector("#increment")
const decrementDom = document.querySelector("#decrement")

// 事件绑定
incrementDom.onclick = () => {
  store.dispatch({
    type: COUNT_INCREMENT
  })
}

decrementDom.onclick = () => {
  store.dispatch({
    type: COUNT_DECREMENT
  })
}

// 初始状态
const countInit = {
  value: 0
}

const COUNT_INCREMENT = "count/increment";
const COUNT_DECREMENT = "count/decrement";

// 创建 reducer
const countReducer = (state = countInit, action) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return {
        ...state, value: state.value + 1
      };
    case COUNT_DECREMENT:
      return {
        ...state, value: state.value - 1
      };
    default:
      return state
  };
}

// 创建 store
const store = legacy_createStore(countReducer)

// 渲染方法
const renderCounter = () => {
  counterDom.innerHTML = store.getState().value
}

// 首次执行
renderCounter()

// 订阅渲染方法,当 store 有变化时通知订阅方法
store.subscribe(renderCounter) 