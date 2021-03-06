import styled from 'styled-components';

const Container = styled.div `
    width:100vw;
    max-width:100vw;
    min-width:100vw;
    height:100vh;
    max-height:100vh;
    min-height:100vh;
    padding:15px;
    display:flex;
    box-sizing:border-box;
    flex-direction:column;
    ${props => props.shaped ? `background-image:url(${require('../assets/images/shape.png')});background-size: 100% 100%;` : null}
    ${props => props.rainbow ? `background-image: linear-gradient(to bottom,${props.theme.colors.blue},#ff7b79)` : null};
    ${props => props.x ? `align-items: ${props.x}` : null};
    ${props => props.y ? `justify-content: ${props.y}` : null};
`

export default Container;