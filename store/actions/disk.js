import * as actionTypes from './actionTypes';

export function newRound() {
  return (dispatch) => {
    dispatch({type: actionTypes.NEW_ROUND});
  }
}

export function selectPlayer(player) {
    console.log("select player");
    return {
      type: actionTypes.SELECT_PLAYER,
      payload: player,
    }
}