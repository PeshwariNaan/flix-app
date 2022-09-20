import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { GlobalStyles } from './theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <GlobalStyles/>
    <div >
     
    </div>
    </ThemeProvider>
  )
}

export default App
