import React from 'react';
import { Text, View } from 'react-native';


export default class Overviewer extends React.Component {
  getHoles(holes) {
    return holes.map(h=>{
      return <View><Text>{h.count}</Text></View>
    });
  }

  render() {
    return (
      <View>
        {/*this.getHoles(this.props.holes)*/}
        <Text>{JSON.stringify(this.props.holes)}</Text>
      </View>
    );
  }
}