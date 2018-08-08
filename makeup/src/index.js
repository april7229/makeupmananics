import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SignIn from './SignIn/signin.js';

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
    <Router path="/" history={BrowserHistory}>
        <Route path="/app" App={App} />
        <Route path="/signin" SignIn={signin} />
        </Router>
        
    , document.getElementById( 'root' ) );
registerServiceWorker();
