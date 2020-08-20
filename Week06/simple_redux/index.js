const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;
const { createLogger } = require("redux-logger");

const logger = createLogger({
  // ...options
});
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action creater
function buyCake() {
  const action = {
    type: "BUY_CAKE",
    info: "First redux action",
  };
  return action;
}

function buyIceCream() {
  const action = {
    type: "BUY_ICECREAM",
    info: "Second redux action",
  };
  return action;
}

// initialState
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 30,
};

// reducer
const cakeReducer = (state = initialCakeState, action) => {
  // determine which action was dispatched from the js app
  // not mutating the original state, but returning a new state object
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());

// store.subscribe   一旦 State 发生变化，就自动执行这个函数
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
