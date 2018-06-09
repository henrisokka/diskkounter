import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Overviewer from './Overviewer';
import Round from './Round';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../store/actions/index';

const hole = {
  count: 0,
  completed: false,
  comment: "",
  roundId: undefined,
}

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      front: true,
      round: false,
      currentHole: 0,
      roundData: [],
    }

    //this.holeCompleted = this.holeCompleted.bind(this);
    //this.newHole = this.newHole.bind(this);
  }

  handlePress(cmd) {
    console.log(cmd);
    if(cmd === "ROUND" && this.state.round === false) {
      this.setState({round: true});
      this.newHole();
    }
  }

  async updateServer(cmd, data) {
    let res = await fetch('https://dnfh56i1fk.execute-api.eu-west-1.amazonaws.com/dev/diskAPI');
    console.log(res.headers.map.thrower);
  }
/*
  holeCompleted(data) {
    console.log(this.props);
    console.log("hole completed");
    let updatedRoundData = this.state.roundData;
    updatedRoundData[this.state.currentHole] = data;
    this.setState({roundData: updatedRoundData, currentHole: this.state.currentHole + 1});
    this.newHole();
  }

  newHole() {
    this.setState({roundData: this.state.roundData.concat([Object.assign({}, hole)])});
  }
*/
  componentDidReceiveProps(props) {
    console.log("new")
  }
  showStore() {
    console.log(this.props);
  }

  render() {
    return (
      <View>
        <Text style={{fontWeight: "bold", fontSize: 40}}>DISK</Text>
        <Text>Welcome to diskkounter</Text>
        <Button title="NEW ROUND" onPress={() => this.props.newRound()} />
        <Round started={this.props.started} readyHandler={this.props.updateCount} currentHole={this.state.roundData[this.state.currentHole]} />
        <Overviewer data={this.props.dataReducer} />
        <Button title="DEBUG" onPress={this.showStore.bind(this)} />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  /*
  console.log("mapStateToProps");
  console.log(state);
  console.log(props);
  */
  return {
      started: state.disk.started,
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Main);