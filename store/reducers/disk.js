import { combineReducers } from 'redux';
 
import * as actionTypes from "../actions/actionTypes" //Import the actions types constant we defined in our actions
 
let initialStore = {
    currentHole: 0,
    roundStarted: false,
    selectedPlayer: -1,
    players: [
        {
            name: "Esimerkki Pelaaja",
            results: [
                {
                    holeId: "0123",
                    result: 0,
                    comment: "",
                }
            ]
        },
        {
            name: "Herni Porhola",
            results: [
                {
                    holeId: "0123",
                    result: 0,
                    comment: "",
                }
            ]
        },
        {
            name: "Samppa Väinölä",
            results: [
                {
                    holeId: "0123",
                    result: 0,
                    comment: "",
                }
            ]
        }
    ]
}


const newRound = (state, action) => {
    console.log("new round");
    return {
        ...state,
        roundStarted: true,
    }
}

const selectPlayer = (state, action) => {
    return {
        ...state,
        selectedPlayer: action.payload,
    }
}

const submitResult = (state, action) => {
    let newState = Object.assign({}, state);
    newState.players[state.selectedPlayer].results[state.currentHole].result = action.payload.result;
    console.log("newState: ", newState);
    return newState;
}

const disk = (state = initialStore, action) => {
    switch (action.type) {
        case actionTypes.NEW_ROUND: return newRound(state, action)
        case actionTypes.SELECT_PLAYER: return selectPlayer(state, action)
        case actionTypes.SUBMIT_RESULT: return submitResult(state, action)
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
 