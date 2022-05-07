import React, {useState} from 'react';
import Toggle from '../Toggle';

import {
    MdDashboard,
    MdExitToApp,
    MdClose,
    MdMenu, 
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import { 
    Container,
    Header,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter,
}  from './styles';

  export function Aside() {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);


    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }


    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }


    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>

                <Title>Dash Bot</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard />
                    Chat
                </MenuItemLink>

                <MenuItemLink href="/intencao">
                <MdDashboard />
                   Intenção
                </MenuItemLink>
                
                <MenuItemLink href="/preview">
                <MdDashboard />
                     Preview
                </MenuItemLink>

                <MenuItemLink href="/swagger">
                <MdDashboard />
                     Swagger
                </MenuItemLink>

                <MenuItemLink href="/clientes">
                <MdDashboard />
                      Clientes
                </MenuItemLink>

                <MenuItemLink href="/projeto">
                <MdDashboard />
                       Projeto
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}
