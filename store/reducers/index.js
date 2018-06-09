import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE, NEW_ROUND, UPDATE_COUNT } from "../actions/" //Import the actions types constant we defined in our actions
 
let initialStore = {
    players: ["Jami", "Henri", "Ismo"],
    holes: [{
      Jami: 0,
      Henri: 0,
      Ismo: 0,

    }],
    started: false,
    completed: false,
    id: -1,
    activePlayer: 0,
    currentHole: 0,
}

let newState = [];

const disk = (state = initialStore, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            console.log("ACTION: ", action);
            state = Object.assign({}, state, { data: action.data });
            return state;
        case NEW_ROUND:
          newState = Object.assign({}, state);
          newState.started = true;

          console.log("NEW_ROUND");
          console.log("newState:", newState);
          return newState;


        case UPDATE_COUNT:
            console.log("COUNT IS U KNO is:", action.count);
            console.log("action is: ", action); 
            return updatePlayer(state, state.players[state.activePlayer], action.count.count);
        default:
            return state;
    }
};

function updatePlayer(state, player, count) {
  let newState = Object.assign({}, state);
  const currentHole = newState.holes[newState.currentHole];
  currentHole[player] = count;
 
  return newState;
}
 
// Combine all the reducers
const rootReducer = combineReducers({
    disk
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});


export default rootReducer;
 