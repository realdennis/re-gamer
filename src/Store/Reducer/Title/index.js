export default (state = { name: '' }, action) => {
  switch (action.type) {
    case 'title':
      return { name: action.text };
    default:
      return state;
  }
};
