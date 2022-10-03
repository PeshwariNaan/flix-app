import { Fragment } from 'react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/header/Header.component'
import { GlobalStyles } from './theme'

function App() {
 

  return (
    <Fragment>
      <GlobalStyles/>
    <div >
     <Header >
      Header
     </Header>
    </div>
    </Fragment>
   
  )
}

export default App
