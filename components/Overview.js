import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

class Overview extends React.Component {
  componentWillReceiveProps(props) {
    console.log("overview will receive props", props);
  }

  getOverview(players)  {
    console.log("getOverview");
    return players.map(p => {
      return (
        <View>
          <Text>{p.name}</Text>
          {this.getResults(p.results)}
        </View>);
    });
  }

  getResults(results) {
    return results.map((r, i) => {
      return (
        <View>
          <Text>{i + 1}: {r.result}</Text>
        </View>
        );
    });
  }

  render() {
    return (
      <View>    
        <Text>Overview</Text>
        {this.getOverview(this.props.players)}
      </View>);
  }
}

function mapStateToProps(state) {
  return {
    players: state.disk.players,
  }
}

export default connect(mapStateToProps)(Overview);