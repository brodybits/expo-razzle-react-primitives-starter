// originally based on expo-template-blank

/** @jsx h */
import { createElement as h, Component } from 'react';

import { StyleSheet, Text, View } from 'react-primitives';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.container}>
          <div>** some div text</div>
          <Text>Another Text element</Text>
          <div>** some more div text</div>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
