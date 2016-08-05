var redux = require('redux');

console.log('starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  console.log('New action', action);
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }

};
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);

var action = {
  type: "CHANGE_SEARCH_TEXT",
  searchText: 'donuts'
};

store.dispatch(action);
console.log('searchtext should be donut', store.getState());