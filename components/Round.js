import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';

class Round extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      count: 0,
      style: {
        position: "absolute",
        left: props.left,
        top: 300,
        height: 150,
        width: 150,
        overflor: "auto",
        backgroundColor: "grey",
        button: {
          backgroundColor: "black"
        }
      }
    }
    console.log("ROund props: ", props);
  }
  componentWillReceiveProps(props) {
    console.log("ROund received: ", props);
  }
 
  render() {
    if (!this.props.started) {
      return (<View>
          <Text>No active round</Text>
        
        </View>);
    }
    return (
      <View style={this.state.style}>
        <Text>{this.props.player}</Text>
        <Button style={this.state.style.button} title="+1" onPress={()=> this.setState({count: this.state.count + 1})} />
        <Text style={{fontSize: 70}}>{this.state.count}</Text>
        <Button title="-1" onPress={()=> this.setState({count: this.state.count - 1})} />
        
        <Button title="Ready!" onPress={() => {
          this.props.readyHandler(this.state.count);
          this.setState({count: 0});
      }} />
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

export default connect(mapStateToProps)(Round);