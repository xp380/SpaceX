import React from 'react';
import { render } from 'react-dom';
import client from './components/index'
import ExchangeRates from './components/ExchangeRates'

import { ApolloProvider } from '@apollo/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRates/>
      </div>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));