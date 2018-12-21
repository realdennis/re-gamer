const title_reducer = (state = { titleName: '' }, action) => {
  switch (action.type) {
    case 'title':
      return { titleName: action.text };
    default:
      return state;
  }
};
export default title_reducer;
