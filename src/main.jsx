import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from '../Global_Style/Global-style'
import MostrarCep from './components/mostra-cep'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
   <MostrarCep/>
  </React.StrictMode>,
)
