import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './components/Routes';
import reducers from './reducers/index';


 class App extends Component {

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBYB51Hz_033XmNprtZ9KVnc0dvyvZGwU0",
            authDomain: "tellme-13716.firebaseapp.com",
            databaseURL: "https://tellme-13716.firebaseio.com",
            projectId: "tellme-13716",
            storageBucket: "tellme-13716.appspot.com",
            messagingSenderId: "355557366613"
        });

        console.disableYellowBox = true;
    }

    render(){
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        )
    }
}

export default App