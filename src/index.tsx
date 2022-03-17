import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "@self.id/react"

console.log(Provider)

ReactDOM.render(
  <Provider client={{ ceramic: 'testnet-clay' }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
