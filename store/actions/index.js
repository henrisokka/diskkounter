export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export const NEW_ROUND = 'NEW_ROUND';
export const UPDATE_COUNT = 'UPDATE_COUNT';

export function getData(holeData){
  return (dispatch) => {
      console.log("action called");
      console.log(holeData);
      //Make API Call
      //For this example, I will be using the sample data in the json file
      //delay the retrieval [Sample reasons only]
        dispatch({type: DATA_AVAILABLE, data:holeData});

  };
}

export function newRound() {
  return (dispatch) => {
    dispatch({type: NEW_ROUND});
  }
}

export function updateCount(count, player) {
    return (dispatch) => {
      console.log("count: ", count);
      dispatch({type: UPDATE_COUNT, count, player});
    }
  
}
async function updateServer(cmd, data) {
  let res = await fetch('https://dnfh56i1fk.execute-api.eu-west-1.amazonaws.com/dev/diskAPI');
  console.log(res.headers.map.thrower);
}