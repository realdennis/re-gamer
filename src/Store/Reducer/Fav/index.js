export default (state = { favList: [] }, action) => {
  switch (action.type) {
    case 'add':
      const temp = [...state.favList, action.board];
      //remove the same bsn object
      return {
        ...state,
        favList: temp.filter(
          (board, index, self) =>
            index === self.findIndex(b => b.bsn === board.bsn)
        )
      };
    case 'remove':
      // remove by bsn
      return {
        ...state,
        favList: state.favList.filter(b => b.bsn !== action.board.bsn)
      };
    default:
      return state;
  }
};
