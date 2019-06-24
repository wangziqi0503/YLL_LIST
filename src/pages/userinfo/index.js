import React, { PureComponent } from 'react';
import { 
    Top,
    UserinfoWrapper,
    Thead,
    TBody
} from './style';
import { GlobalStyles } from '../../statics/iconfont2/iconfont';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Info extends PureComponent {
    getListData(changeList,arr){
        if(!arr) return false;
        const Arr = arr.map((item, index)=>{
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.tbaccount}</td>
                    <td>{item.phone}</td>
                    <td>{item.money}</td>
                    <td>{item.yue}<i className="iconfont" onClick={() => changeList(index)}>&#xe621;</i></td>
                </tr>
            )
        })

        return Arr
    }
    
    getListArr(changeList,arr){
        return (
            <TBody>
                {this.getListData(changeList,arr)}
            </TBody>
        )
    }
    
    render() {
        const { listinfo,changeList } = this.props;

        return (
            <div>
            <Top>
                YLL STUDIO
            </Top>
            <UserinfoWrapper>
                <Thead>
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>淘宝账号</th>
                        <th>手机号</th>
                        <th>奖励金额</th>
                        <th>余额</th>
                    </tr>
                </Thead>
                {this.getListArr(changeList,listinfo.toJS())}
            </UserinfoWrapper>
            <GlobalStyles />
            </div>
        )
        
    }
}



const mapState = (state) => ({
    status: state.getIn(['info', 'status']),
    listinfo : state.getIn(['info', 'listinfo'])
})

const mapDispatch = (dispatch) => ({
    changeList(index){
        dispatch(actionCreators.changeList(index));
    }
});


export default connect(mapState, mapDispatch)(Info);