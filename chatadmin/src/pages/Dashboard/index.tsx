import React from 'react';

import {
    Container,
    Content,
    Text,
    Textp,
} from './styles';

const Dashboard: React.FC = () => {
 

    return (
        <Container>

            <Text> Início </Text>
            <Textp> Informações do chat</Textp>

            <Content>

                <Textp> Projeto </Textp>


            </Content>
        </Container>
    );
}

export default Dashboard;