export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export const NEW_ROUND = 'NEW_ROUND';

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