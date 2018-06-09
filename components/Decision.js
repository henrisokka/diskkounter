import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    left: 0,
    top: 500,
  }

  async updatePosition(index) {
    console.log("UPDATEUPDATEUPDATEUPDATEUPDATEUPDATEUPDATEUPDATEUPDATEUPDATEUPDATE");
    let newLeft = Math.random() * 100;
    let top = Math.random() * 100;

    let res = await fetch('https://dnfh56i1fk.execute-api.eu-west-1.amazonaws.com/dev/diskAPI');
    
    console.log(res.headers.map.thrower);
  }
  render() {
    return (
      <View>
        <Text>DECISIONS</Text>
        <Text onPress={() => this.updatePosition(0)} style={{left: this.state.left, top: this.state.top}}>YOU HAVE BEEN SELECTED</Text>
        <Text onPress={() => this.updatePosition(1)}>FOLLOW path</Text>
      </View>
    );
  }
}

