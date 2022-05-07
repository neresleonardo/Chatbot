import React from "react";

// styles
import { Grid } from './styles'
import MainHeader from "../MainHeader";
import {Aside} from "../Aside";
import Content from "../Content";


const Layout: React.FC = ( {children}) => { // Componente funcional


    return (
        
        <Grid>
          
            <MainHeader/>
            <Aside/>

            <Content>
            {children}
            </Content>
        </Grid>
    )
}

export default Layout;