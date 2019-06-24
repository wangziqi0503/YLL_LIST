import { fromJS } from 'immutable';
// import * as constants from './constants';

//immutable库
//immutable对象

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default :
            return state;
    }
}