import React from 'react';
import { StyleSheet, View } from 'react-native';
import HandGrid from './components/handGrid';
import store from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState));
  }

  selectHand(selectedHandId) {
    store.dispatch({ type: 'HAND_SELECTED', selectedHandId });
  }

  render() {
    return (
      <View style={styles.container}>
        <HandGrid selectedHands={this.state.selectedHands} selectHand={this.selectHand} />
      </View>
    );
  }
}
