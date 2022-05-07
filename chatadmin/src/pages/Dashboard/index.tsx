import React from 'react';
import SelectInput from '../../components/SelectInput';

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
                
                <SelectInput/>

            </Content>
        </Container>
    );
}

export default Dashboard;