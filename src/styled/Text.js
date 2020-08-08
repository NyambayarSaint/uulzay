import styled from 'styled-components';

const Text = styled.p `
    ${props => props.white ? `color:white` : null};
    ${props => props.light ? `font-weight:300` : null};
    ${props => props.align ? `text-align:${props.align}` : null};
`

export default Text