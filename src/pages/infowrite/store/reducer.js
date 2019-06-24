import { fromJS } from 'immutable';


//immutable库
//immutable对象

const defaultState = fromJS({

});




export default (state = defaultState, action) => {
    switch(action.type) {
        default :
            return state;
    }
}