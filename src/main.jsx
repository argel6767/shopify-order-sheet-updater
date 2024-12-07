import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ClerkProvider} from "@clerk/clerk-react";
import {getClerkKey} from "./config/ClerkConfig.js";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ClerkProvider publishableKey={getClerkKey()}>
          <App />
      </ClerkProvider>
  </StrictMode>,
)
