import styled from 'styled-components';
import logoPic from '../../statics/bg.jpg'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width:100%;
    height:100%;
    margin: 0 auto;
    background: url(${logoPic}) no-repeat;
    background-position:center center;
    background-size: cover; 
`;