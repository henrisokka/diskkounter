import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';

class PlayerSelector extends React.Component {
  render() {
    return (
      <View onPress={() => this.props.selectPlayer(this.props.player.id)}>
        <Text>{this.props.player.name}</Text>
        <Text>Kokonaistulos: 6</Text>
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
      started: state.disk.started
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectPlayer: (id) => {dispatch.actions.selectPlayer(id)},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelector);