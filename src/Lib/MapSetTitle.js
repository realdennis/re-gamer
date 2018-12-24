import { SetTitle } from '../Store/Action';

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  setTitle: t => dispatch(SetTitle(t))
});

export default mapDispatchToProps;