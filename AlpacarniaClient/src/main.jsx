import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { persistore, store } from "./redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { OffersProvider } from "./components/OffersContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <OffersProvider>
          <App />
        </OffersProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
