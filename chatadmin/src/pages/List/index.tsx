import React from 'react';

import {
    Container,
    Content,
    Text,
    Textp,
} from './styles';

const Intencao: React.FC = () => {
 

    return (
        <Container>

            <Text> Intenção </Text>
            <Textp> Cadastre ou edite os intenção disponiveis.</Textp>

            <Content>

                <Textp> Projeto </Textp>


            </Content>
        </Container>
    );
}

export default Intencao;