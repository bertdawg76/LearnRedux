var redux = require('redux');

console.log('starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
 // state = state || {name: 'Anonymous'}

  console.log('New action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f

));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
//unsubscribe();

var currentState = store.getState();

console.log('currentState', currentState);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Bert'
});



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'bobo'
});