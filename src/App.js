import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Header from './components/header';

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql"
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Header />
                <Query
                    query={gql`
      {
        getAllCompanies {
          _id
          name
          location
        }
      }
    `} >
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>; return data.getAllCompanies.map(({ _id, name, location }) => (
                            <div key={_id}>
                                <p>{`${name} by ${location}`}</p>
                            </div>
                        ));
                    }}
                </Query>
            </div>
        </ApolloProvider>
    );
}

export default App;
