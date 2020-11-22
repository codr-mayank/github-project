import { combineReducers } from "redux";

const initialState = {
  inputValue: ''
}

const inputChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE': {
      return { inputValue: action.payload };
    }
    default: {
      return state;
    }
  }
}

const userReducer = (state = { isResultPresent: 0 }, action) => {
  switch (action.type) {
    case 'GITHUB_USER': {
      const finalState = { isResultPresent: 1, total_count: action.payload.total_count, userArray: action.payload.items };
      console.log(finalState);
      return finalState;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  input: inputChangeReducer,
  user: userReducer
});
