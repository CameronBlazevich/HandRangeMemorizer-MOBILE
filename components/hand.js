import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  hand: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    height: 27,
    width: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedHand: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    height: 27,
    width: 27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
  cardText: {
    fontSize: 10,
  },
});

function Hand(props) {
  const handId = props.row.toString() + props.column.toString();

  let handText = '';
  if (props.row < props.column) {
    handText = `${props.rowCard + props.columnCard}s`;
  } else {
    handText = `${props.columnCard + props.rowCard}o`;
  }

  const styleForHand = props.selectedHands.includes(handId) ? styles.selectedHand : styles.hand;

  return (
    <TouchableHighlight onPress={() => props.onPress(handId)}>
      <View style={styleForHand}>
        <Text style={styles.cardText} row={props.row} column={props.column}>
          {handText}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default Hand;

Hand.propTypes = {
  rowCard: PropTypes.string.isRequired,
  columnCard: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
};
