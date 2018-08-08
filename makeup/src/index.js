import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { firebaseApp } from './firebase';

import App from './components/App';
import signin from './components/signin';


firebaseApp.auth().onAuthStateCHanged( user =>
{
    if ( user )
    {
        console.log( 'user has signed in or up ', user );
    } else
    {
        console.log( 'user has signed out or still needs to sign in.' );
    }
})
ReactDOM.render(
    <Router>
        <Route path="/App" App={App} />
        <Route path="/signin" signin={signin} />
        </Router>
        
    , document.getElementById( 'root' ) );
