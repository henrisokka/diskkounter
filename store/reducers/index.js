import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE, NEW_ROUND } from "../actions/" //Import the actions types constant we defined in our actions
 
let initialStore = { roundData: {
    players: [],
    started: false,
    completed: false,
    id: -1,
  }
}


const disk = (state = initialStore, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            console.log("ACTION: ", action);
            state = Object.assign({}, state, { data: action.data });
            return state;
        case NEW_ROUND:
          let newState = Object.assign({}, state);
          newState.roundData.started = true;

          console.log("NEW_ROUND");
          console.log("newState:", newState);
          return newState;
        default:
            return state;
    }
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    disk
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});


export default rootReducer;
 