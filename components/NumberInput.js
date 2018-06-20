import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default class NumberInput extends React.Component {
  state = {
    result: 0,
  }

  render() {
    return (
      <View>    
        <Text>{this.props.player.name}</Text>
        <TextInput 
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           keyboardType='numeric'
           value={this.state.result}
           onChangeText={(value)=> this.setState({result: value})}
          />
        <Button title="submit" onPress={() => this.props.submit(this.state.result)} />
      </View>);
  }
}