import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Hand from './hand';

const styles = StyleSheet.create({
  gridRow: { flexDirection: 'row' },
});

const gridArray = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

function GridRow(props) {
  return (
    <View style={styles.gridRow}>
      {gridArray.map((value, index) =>
        (<Hand
          key={value}
          row={props.row}
          rowCard={props.rowCard}
          column={index}
          columnCard={value}
          onPress={props.selectHand}
          selectedHands={props.selectedHands}
        />),
      )}
    </View>
  );
}

export default GridRow;

GridRow.propTypes = {
  row: PropTypes.number.isRequired,
  rowCard: PropTypes.string.isRequired,
};
