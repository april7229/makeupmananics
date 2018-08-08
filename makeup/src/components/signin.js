

import { firebaseApp } from '../firebase';
import React, { Component } from 'react';

class SignIn extends Component{
    constructor( props ){
        super( props );
        this.state = {
            email: '',
            password: '',
            error: {
                message:''
            }
        }
    }
        SignIn() {
            console.log( 'this.state', this.state );
            const { email, password } = this.state;
            firebaseApp.auth().createUserWithEmailAndPassword( email, password )
                .catch( error =>
                {
                    
                    this.setState( { error } )
            }  )
        }
     
    render()
    {
        return (
            <div className="form-inline">
                <h2>Sign Up</h2>
                <div className="form-group"></div>
                <input
                    className="form-contol"
                    type="text"
                    placeholder="email"
                    oncChange={event => this.setState({email: event.target.value})}
                />
                <input
                    className="form-control"
                    type="password"
                    placeholder="password"
                    onChange={event => this.setState( { password: event.target.value } )}
                />
                <button
                    className="btn  btn-primary"
                    type="button"
                    onClick={()=> this.SignUp() }
                >  
                    Sign In
                    </button>
            </div>
            <div>{this.state.error.message}</div>
            
                
        )
    }
}

export default SignIn; 
