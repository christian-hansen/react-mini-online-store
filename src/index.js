import React from "react"
import ReactDOMClient from "react-dom/client"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"
// Import stylesheet
import './styles.css'
import App from "./App"

import SSRProvider from 'react-bootstrap/SSRProvider';

<SSRProvider>
  <App />
</SSRProvider>;

    const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<App/>)