import React  from 'react';
import CustomList from '../../Components/CustomList';
import BoardItem from '../Board/BoardItem';
import { connect } from 'react-redux';
const mapStateToProps = state => ({ favList: state.Fav.favList });

const Favorite = ({favList}) => {
  return (
    <div>
      <CustomList>
        {favList.map((board, index) => (
          <BoardItem
            json={favList[index]}
            board={board}
            key={index}
            favList={favList}
          />
        ))}
      </CustomList>
    </div>
  );
};
export default connect(
  mapStateToProps,
  null
)(Favorite);
