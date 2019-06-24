import { combineReducers } from 'redux-immutable';
// import { reducer as headerReducer }from '../common/header/store';
import { reducer as homeReducer }from '../pages/home/store';
import { reducer as writeReducer }from '../pages/infowrite/store';
import { reducer as infoReducer }from '../pages/userinfo/store';

const reducer = combineReducers({
    home: homeReducer,
    write: writeReducer,
    info: infoReducer
})

export default reducer

