import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Header from './components/header';
import Routes from './routes';

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql"
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Header />
                <Routes />
            </div>
        </ApolloProvider>
    );
}

export default App;
