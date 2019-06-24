import styled from 'styled-components';

export const WriteWrapper = styled.div`
    width:100%;
    height: 100%;
    min-width: 560px;
`;

export const LeftImg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 480px;
    float: left;
    overflow: hidden;
    background: url('https://4.url.cn/zc/v3/img/01-3.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const RightWrapper = styled.div`
    margin-left: 480px;
    position: relative;
    height: 100%;
    background: #f4f3f1;
`;

export const WriteMain = styled.div`
    position: absolute;
    padding-bottom: 10px;
    top: 100px;
    width: 100%;
`;

export const WriteTitle = styled.div`
    font-size: 44px;
    margin-bottom: 20px;
`;

export const FromWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: 480px;
`;

export const Input = styled.input`
    border: 1px #aaa solid;
    border-radius: 4px;
    background: 0 0;
    text-align: left;
    font-size: 20px;
    width: 438px;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    margin: 20px 0;
    background: #fff;
    &.submit{
        border: 1px #3083ff solid;
        border-radius: 4px;
        background-color: #3487ff;
        box-shadow: 0 5px 8px 0 rgba(24,95,255,.1);
        color: #fff;
        text-align: center;
        font-weight: lighter;
        background-image: linear-gradient(0deg,#398bff,#3083ff);
        width: 478px;
        height: 60px;
        margin: 40px 0 8px;
        font-size: 24px;
        cursor: pointer;
    }
`;