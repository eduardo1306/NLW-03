import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

import 'leaflet/dist/leaflet.css';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/app' component={OrphanagesMap} />
        <Route path='/orphanage/create' component={CreateOrphanage} />
        <Route path='/orphanage/:id' component={Orphanage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
