export default (state = { favList: [] }, action) => {
  switch (action.type) {
    case 'add':
      const temp = [...state.favList, action.board];
      return {
        ...state,
        favList: temp.filter((b, index) => temp.indexOf(b) === index)
      };
    case 'remove':
      const index = state.favList.indexOf(action.board);
      return { ...state, favList: state.favList.filter((n, i) => i !== index) };
    default:
      return state;
  }
};
