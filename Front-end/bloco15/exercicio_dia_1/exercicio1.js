const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// ACTIONS TYPES
const PREV = 'prev';
const NEXT = 'next';

// REDUCER
const toggleColor = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PREV:
      return { 
        ...state,
        index: state.index > 0 ? state.index - 1 : 0 
      }
    case NEXT:
      return { 
        ...state,
        index: state.index < (state.colors.length - 1)
          ? state.index + 1 : 5
        }
    default:
      return state;
  }
}

// STORE
const store = Redux.createStore(toggleColor);
console.log(store);

store.subscribe(() => {
  const { colors, index } = store.getState();
  const color = document.getElementById('value');
  console.log(colors.length);
  color.innerText = colors[index];
});

// ACTIONS
const prev = document.getElementById('previous');
const next = document.getElementById('next');

prev.addEventListener('click', () => {
  store.dispatch({ type: PREV });
});
next.addEventListener('click', () => {
  store.dispatch({ type: NEXT });
});
