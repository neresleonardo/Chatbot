import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Intencao from '../pages/List';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/intencao" exact component={Intencao} />
            
        </Switch>
    </Layout>
);

export default AppRoutes;