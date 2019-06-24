import React, { PureComponent } from 'react';
import { GlobalStyles } from '../../statics/iconfont/iconfont';
import { Link } from 'react-router-dom';
import { 
    HomeWrapper,
} from './style';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <Link to ='./write'>
                    <i className="iconfont">&#xe600;</i>
                </Link>
                <GlobalStyles />
            </HomeWrapper>
        )
    }
}

export default Home;