import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from '../src/pages/HomePage'
import DiscoveryPage from '../src/pages/DiscoveryPage'
import FavoritesPage from '../src/pages/FavoritesPage'
import SearchPage from '../src/pages/SearchPage'
import AlbumPage from '../src/pages/AlbumPage'

export default function Routes(){
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/discovery' component={DiscoveryPage}/>
      <Route exact path='/favorites' component={FavoritesPage}/>
      <Route exact path='/search' component={SearchPage}/>
      <Route exact path='/album/:id' component={AlbumPage}/>
    </Switch>
  )
}