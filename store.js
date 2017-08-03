import { createStore } from 'redux';

const defaultState = {
  selectedHands: ['00'],
};

function store(state = defaultState, action) {
  switch (action.type) {
    case 'HAND_SELECTED':
      if (state.selectedHands.includes(action.selectedHandId)) {
        const filteredHands = state.selectedHands.filter(hand => hand !== action.selectedHandId);
        return Object.assign({}, state, {
          selectedHands: filteredHands,
        });
      }
      const allSelectedHands = state.selectedHands.concat([action.selectedHandId]);
      return Object.assign({}, state, {
        selectedHands: allSelectedHands,
      });

    default:
      return state;
  }
}

export default createStore(store);
