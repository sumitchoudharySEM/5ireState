import React from 'react'
import ReactDOM from 'react-dom/client'
import { _5irechain } from "@thirdweb-dev/chains";
import { ThirdwebProvider} from "@thirdweb-dev/react";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={ _5irechain }>
    <App />
  </ThirdwebProvider>,
  </React.StrictMode>
)
