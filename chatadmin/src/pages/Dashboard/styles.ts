import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: ${props => props.theme.colors.secondary};
    padding: 20px;
`;

export const Text = styled.text`
    color:  ${props => props.theme.colors.white};
    font-size: 25px;
    display: flex;
    
`;

export const Textp = styled.text`
        color:  ${props => props.theme.colors.white};
        font-size: 18px;
`;


