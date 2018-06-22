import { combineReducers } from 'redux';
 
import * as actionTypes from "../actions/actionTypes" //Import the actions types constant we defined in our actions
 
const holeTemplate = {
    holeId: null,
    result: null,
    comment: "",
}

let initialStore = {
    currentHole: 0,
    roundStarted: false,
    selectedPlayer: -1,
    uiState: "MAIN",
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
    let players = state.players.slice();
    players[state.selectedPlayer].results[state.currentHole].result = action.payload.result;
    
    return {
        ...state,
        players: players,
    };
}

const nextHole = (state, action) => {
    let players = state.players.slice();
    
    for (let player in players) {
        players[player].results.push(Object.assign({}, holeTemplate));
    } 

    return {
        ...state,
        currentHole: state.currentHole + 1,
        players: players,
    }
}

const changeUI = (state, action) => {
    return {
        ...state,
        uiState: action.payload,
    }
}

const disk = (state = initialStore, action) => {
    switch (action.type) {
        case actionTypes.NEW_ROUND: return newRound(state, action)
        case actionTypes.SELECT_PLAYER: return selectPlayer(state, action)
        case actionTypes.SUBMIT_RESULT: return submitResult(state, action)
        case actionTypes.NEXT_HOLE: return nextHole(state, action);
        case actionTypes.CHANGE_UI: return changeUI(state, action);
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
 