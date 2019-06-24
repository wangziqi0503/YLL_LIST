import * as constants from './constants';
import { fromJS } from 'immutable';

const additem = (list, status) => ({
    type: constants.ADD_LIST,
    list: fromJS(list),
    status
})

const checkMobile = (phone) => {
    var regu =/^[1][3|4|5|8][0-9]{9}$/;
    var re = new RegExp(regu);
    if (re.test(phone)) {
        return true;
    }else{
        return false;
    }
}


const ValueCheck = (name, tbaccount, phone, money) =>{
    if(name.value && phone.value && money.value && tbaccount.value){
        if(checkMobile(Number(phone.value))){
            if(Number(money.value) !== 500 && Number(money.value) !== 300){
                alert('请填写正确金额' + money.value)
                return false
            }else{
                return true
            }
        }else{
            alert('请填写正确号码' + phone.value)
            return false
        }
    }else{
        alert('请填写完整信息')
        return false
    }
}


export const addList = (name, tbaccount, phone, money) => {
        return (dispatch) => {
           if(!ValueCheck(name, tbaccount, phone, money)) return false
            let endArr = [];
            const arrlist = [];
            const list = arrlist.concat({'name':name.value, 'phone':phone.value, 'money':money.value,'tbaccount': tbaccount.value,'yue': money.value});
            let localArr = JSON.parse(localStorage.getItem('List'));
            if (localArr) {
                endArr = localArr.concat(list);
                localStorage.setItem('List',JSON.stringify(endArr));
            }else{
                endArr = list
                localStorage.setItem('List',JSON.stringify(endArr));
            }
            
            dispatch(additem(endArr, true))
            
        }
        
}


export const changeList = (index) =>{
    return (dispatch) => {
    const history = JSON.parse(localStorage.getItem('List'));
    const jine = Number(parseInt(history[index].money) / 10);
    if(history[index].yue > 0 ){
        history[index].yue = parseInt(history[index].yue) - jine;
    }
    
    localStorage.setItem('List',JSON.stringify(history));
        dispatch({
            type:constants.REMOVE_MONEY,
            history:history
        }) 
    }
} 