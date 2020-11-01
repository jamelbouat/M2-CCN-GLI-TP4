import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BeerList from "./BeerList";
import Author from "./Author";

const beers: string[] = ['Carlsberg', 'Pelforth', 'Corona', 'Goudale'];

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path='/'>
                    <BeerList beers = { beers }/>
                </Route>
                <Route path='/about'>
                    <Author />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
