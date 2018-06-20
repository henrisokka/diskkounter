import React from 'react';
import { TouchableOpacity, Text, View, Button, StatusBar } from 'react-native';
import Overviewer from './Overviewer';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../store/actions/index';


class Main extends React.Component {
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
          {this.props.roundStarted ? <Text>Round Started</Text> : <Text>Round not started</Text>}
          {this.selectedPlayer !== -1 ? 
            <View>
              <Text>
              {this.props.players[this.props.selectedPlayer] ? 
              this.props.players[this.props.selectedPlayer].name : ''}</Text>
            </View>
        
          : ''}
        </View>

        <Overviewer holes={this.props.holes} data={this.props.dataReducer}
          currentHole={this.props.holes}
        />
        <Button title="DEBUG" onPress={this.debug.bind(this)} />
      </View>
    );
  }
}

function mapStateToProps(state, props) { 
  return {
      roundStarted: state.disk.roundStarted,
      players: state.disk.players,
      selectedPlayer: state.disk.selectedPlayer,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Main);