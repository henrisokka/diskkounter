import React from 'react';
import { TouchableOpacity, Text, View, Button, StatusBar } from 'react-native';

import NumberInput from './NumberInput';
import Overview from './Overview';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../store/actions/index';


class Main extends React.Component {
  componentDidReceiveProps(props) {
    console.log("new")
  }
  debug() {
    console.log(this.props);
  }

  getPlayerButtons(players, handler) {
    return players.map((p, i) => {
      return  <TouchableOpacity onPress={() => handler(i)} style={{backgroundColor: "yellow", height: "5%"}}>
                <Text>{p.name}</Text>
              </TouchableOpacity>
      });
  }

  render() {
    if (this.props.uiState === "MAIN") {
      return (
        <View style={{flex: 1, flexDirection: "row"}}>
          <StatusBar hidden={true} />
         
          <View style={{width: "30%", top: "5%", backgroundColor: "blue", height: "100%", left: 0}}>
            {this.getPlayerButtons(this.props.players, this.props.selectPlayer)}
            <View style={{position: "absolute", bottom: 0, left: "50%"}}>
              <Button color="red" title="+" onPress={() => console.log("add player")} />
            </View>
          </View>
          <View style={{}}>
            <Text style={{fontWeight: "bold", fontSize: 40}}>DISK</Text>
            <Button title="Start round" onPress={() => this.props.newRound()} />
            <Button title="Next hole" onPress={() => this.props.nextHole()} />
            <Button title="Show overview" onPress={() => this.props.changeUI("OVERVIEW")} />
            <Text>Current Hole: {this.props.currentHole + 1}</Text>
            {this.props.roundStarted ? <Text>Round Started</Text> : <Text>Round not started</Text>}
            {this.selectedPlayer !== -1 ? 
              <View>
                {this.props.players[this.props.selectedPlayer] ? 
                <NumberInput player={this.props.players[this.props.selectedPlayer]} 
                  submit={this.props.submitResult}
                /> : ''}
              </View>
            : ''}
          </View>
  
          <Button title="DEBUG" onPress={this.debug.bind(this)} />
        </View>
      );
    } else if (this.props.uiState === "OVERVIEW") {
      return (
        <View>
          <Overview />
          <Button title="Back to main view" onPress={() => this.props.changeUI("MAIN")} />
        </View>
      )
    }
  }
}

function mapStateToProps(state) { 
  return {
      roundStarted: state.disk.roundStarted,
      players: state.disk.players,
      selectedPlayer: state.disk.selectedPlayer,
      currentHole: state.disk.currentHole,
      uiState: state.disk.uiState,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Main);