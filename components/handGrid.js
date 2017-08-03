import React from 'react';
import { View } from 'react-native';
import GridRow from './gridRow';

const gridArray = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

function HandGrid(props) {
  return (
    <View>
      {gridArray.map((value, index) =>
        (<GridRow
          key={value}
          row={index}
          rowCard={value}
          selectedHands={props.selectedHands}
          selectHand={props.selectHand}
        />),
      )}
    </View>
  );
}

export default HandGrid;
