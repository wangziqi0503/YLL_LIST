import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { WriteMain, WriteTitle, Input } from '../style';
import { actionCreators as InfoActionCreators} from '../../userinfo/store'
import { Link } from 'react-router-dom';

class WriteInfo extends PureComponent {
    static contextTypes = {
        router:PropTypes.object,
    }

    goInfo(){
        return <Redirect to='/info' />
    }
    render() {
        const { status, addList} = this.props;
        return (
            <WriteMain>
                <WriteTitle>YLL活动参与名单</WriteTitle>
                <Input placeholder='姓名' ref={(input) => {this.name = input}}/>
                <Input placeholder='淘宝账号' ref={(input) => {this.tbaccount = input}}/>
                <Input placeholder='手机号' ref={(input) => {this.phone = input}}/>
                <Input placeholder='赠送金额' ref={(input) => {this.money = input}}/>
                <Input className="submit" type="submit" value='添加名单' onClick={() => addList( this.name, this.tbaccount, this.phone, this.money)} />
                <Link to={'/info'}>
                    <Input className="submit" type="submit" value='查看名单' />
                </Link>
                {status ? this.goInfo() : null}
            </WriteMain>
        )
    }



}


const mapState = (state) => ({
    status : state.getIn(['info', 'status'])
})


const mapDispatch = (dispatch) => ({
    addList(name, phone, tbaccount, money){
        dispatch(InfoActionCreators.addList(name,phone,tbaccount,money))
    }
});

export default connect(mapState, mapDispatch)(WriteInfo);