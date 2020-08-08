import styled from 'styled-components';

const Block = styled.div `
    display:flex;
    ${props => props.white ? `background-color:white` : null};
    ${props => props.borderRadius ? `border-radius:${props.borderRadius}` : null};
    ${props => props.direction === "y" ? `flex-direction: column` : null};


    ${props => props.m ? `margin:${props.m}` : null};
    ${props => props.mt ? `margin-top:${props.mt}` : null};
    ${props => props.ml ? `margin-left:${props.ml}` : null};
    ${props => props.mr ? `margin-right:${props.mr}` : null};
    ${props => props.mb ? `margin-bottom:${props.mb}` : null};

    ${props => props.p ? `margin:${props.p}` : null};
    ${props => props.pt ? `margin-top:${props.pt}` : null};
    ${props => props.pl ? `margin-left:${props.pl}` : null};
    ${props => props.pr ? `margin-right:${props.pr}` : null};
    ${props => props.pb ? `margin-bottom:${props.pb}` : null};

    ${props => props.none ? `display:none` : null}

`;

export default Block;