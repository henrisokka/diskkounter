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
  constructor(props) {
    super(props);
    this.state = {
      front: true,
      round: false,
      currentHole: 0,
      roundData: [],
    }
    this.getPlayerCounters = this.getPlayerCounters.bind(this); 
    //this.holeCompleted = this.holeCompleted.bind(this);
    //this.newHole = this.newHole.bind(this); 
    console.log("PLAYERS IN CONSTRUCTOR: ", props);

  }

  handlePress(cmd) {
    console.log(cmd);
    if(cmd === "ROUND" && this.state.round === false) {
      this.setState({round: true});
      this.newHole();
    }
  }

  
  
  componentDidReceiveProps(props) {
    console.log("new")
  }
  showStore() {
    console.log(this.props);
  }

  getPlayerCounters() {
    return this.props.players.map((p, index) => {
      return <Round started={this.props.started} left={index * 150} player={p} readyHandler={(count) => this.props.updateCount(count, p)} />
    })
  }

  render() {
    return (
      <View>
        <Text style={{fontWeight: "bold", fontSize: 40}}>DISK</Text>
        <Text>Welcome to diskkounter</Text>
        <Button title="NEW ROUND" onPress={() => this.props.newRound()} />
        
        {this.getPlayerCounters()}

          
        <Overviewer holes={this.props.holes} data={this.props.dataReducer}
          currentHole={this.props.holes}
        />
        <Button title="DEBUG" onPress={this.showStore.bind(this)} />
      </View>
    );
  }
}

function mapStateToProps(state, props) { 
  return {
      started: state.disk.started,
      players: state.disk.players,
      holes: state.disk.holes,
      currentHole: state.disk.currentHole,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Main);