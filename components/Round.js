import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';

class Round extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      count: 0,
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
      <View>
        <Text>This is the 1st round</Text>
        <Button title="+1" onPress={()=> this.setState({count: this.state.count + 1})} />
        <Text style={{fontSize: 70}}>{this.state.count}</Text>
        <Button title="-1" onPress={()=> this.setState({count: this.state.count - 1})} />
        
        <Button title="Ready!" onPress={() => {
          this.props.readyHandler({count: this.state.count});
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
      started: state.disk.roundData.started
  }
}

export default connect(mapStateToProps)(Round);