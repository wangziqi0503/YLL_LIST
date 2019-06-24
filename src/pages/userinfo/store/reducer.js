import { fromJS } from 'immutable';
import * as constants from './constants';

//immutable库
//immutable对象

const defaultState = fromJS({
    listinfo: JSON.parse(localStorage.getItem('List')) || [{'name':'暂无','tbaccount':'暂无'}],
    status: false
});



export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.REMOVE_MONEY:
            return state.merge({
                listinfo: fromJS(action.history)
            });
        case constants.ADD_LIST:
            return state.merge({
                listinfo: fromJS(action.list),
                status: action.status
            });
        default :
            return state;
    }
}