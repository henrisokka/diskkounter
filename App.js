import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import * as Actions from './store/actions/index'; //Import your actions
 

import Main from './components/Main'

import store from './store/store'; //Import the store

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}



const styles = StyleSheet.create({
  container: {
    
  },
});
