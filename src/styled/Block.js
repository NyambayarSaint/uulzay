import styled from 'styled-components';

const Block = styled.div `
    display:flex;
    ${props => props.white ? `background-color:white` : null};
    ${props => props.borderRadius ? `border-radius:${props.borderRadius}` : null};
    ${props => props.direction === "y" ? `flex-direction: column` : null};

    ${props => props.x ? `align-items: ${props.x}` : null};
    ${props => props.y ? `justify-content: ${props.y}` : null};

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

`;

export default Block;