import { combineReducers } from 'redux';
 
import * as actions from "../actions/actionTypes" //Import the actions types constant we defined in our actions
 
let initialStore = {
    currentHole: -1,
    roundStarted: false,
    selectedPlayer: -1,
    players: [
        {
            name: "Esimerkki Pelaaja",
            results: [
                {
                    holeId: "0123",
                    result: 2,
                    comment: "",
                }
            ]
        },
        {
            name: "Herni Porhola",
            results: [
                {
                    holeId: "0123",
                    result: 2,
                    comment: "",
                }
            ]
        },
        {
            name: "Samppa Väinölä",
            results: [
                {
                    holeId: "0123",
                    result: 2,
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

const disk = (state = initialStore, action) => {
    switch (action.type) {
        case actions.NEW_ROUND: return newRound(state, action)
        case actions.SELECT_PLAYER: return selectPlayer(state, action)
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
 