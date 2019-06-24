import React, { PureComponent } from 'react';
import WriteInfo from './components/write';
import { 
    WriteWrapper,
    LeftImg,
    RightWrapper,
    FromWrapper
} from './style';

class Write extends PureComponent {
    render() {
        return (
            <WriteWrapper>
               <LeftImg></LeftImg>
               <RightWrapper>
                    <FromWrapper>
                        <WriteInfo></WriteInfo>
                    </FromWrapper>
               </RightWrapper>
            </WriteWrapper>
        )
    }
}
export default Write;