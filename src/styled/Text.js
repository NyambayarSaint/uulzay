import styled from 'styled-components';

const Text = styled.p `
    margin:0px;
    text-decoration:none;
    color:inherit;
    ${props => props.black ? `color:black` : null};
    ${props => props.white ? `color:white` : null};
    ${props => props.light ? `font-weight:300` : null};
    ${props => props.bold ? `font-weight:600` : null};
    ${props => props.align ? `text-align:${props.align}` : null};
    ${props => props.big ? 'font-size: 24px' : null};
    ${props => props.small ? 'font-size: 16px' : null};
    ${props => props.center ? `text-align:center` : null};

    ${props => props.m ? `margin:${props.m}` : null};
    ${props => props.mt ? `margin-top:${props.mt}` : null};
    ${props => props.ml ? `margin-left:${props.ml}` : null};
    ${props => props.mr ? `margin-right:${props.mr}` : null};
    ${props => props.mb ? `margin-bottom:${props.mb}` : null};

    ${props => props.p ? `padding:${props.p}` : null};
    ${props => props.pt ? `padding-top:${props.pt}` : null};
    ${props => props.pl ? `padding-left:${props.pl}` : null};
    ${props => props.pr ? `padding-right:${props.pr}` : null};
    ${props => props.pb ? `padding-bottom:${props.pb}` : null};

    ${props => props.none ? `display:none` : null}

`

export default Text