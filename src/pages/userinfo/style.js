
import styled from 'styled-components';

export const Top = styled.div`
    width: 100%;
    height: 40px;
    background: #000;
    color: #fff;
    font-weight: bold;
    font-size:30px;
    line-height: 40px;
    text-align: center;
`

export const UserinfoWrapper = styled.table`
    display: table;
    width: 100%;
    background-color: #fff;
    color: #666;
    margin: 0;
    border-collapse: collapse;
    border-spacing: 0;
    border-color: grey;
    tr{
        transition: all .3s;
        -webkit-transition: all .3s;
    }
`;

export const Thead = styled.thead`
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    tr{
        background-color: #f2f2f2;
        th{
            position: relative;
            padding: 9px 15px;
            min-height: 20px;
            line-height: 20px;
            font-size: 14px;
            border-width: 1px;
            border-style: solid;
            border-color: #e6e6e6;
            text-align: left;
            font-weight: 400;
            -webkit-tap-highlight-color: transparent;
        }
    }
`;

export const TBody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    td{
        position: relative;
        padding: 9px 15px;
        min-height: 20px;
        line-height: 20px;
        font-size: 14px;
        border-width: 1px;
        border-style: solid;
        border-color: #e6e6e6;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
        i{
            margin-left:10px;
            cursor: pointer;
        }
    }
`;
