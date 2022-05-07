import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';
//miragejs
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transaction: [
        {
          id: 1,
          description: 'Freelance de website',
          amount: 2000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          description: 'Freelance de website',
          amount: 2000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);