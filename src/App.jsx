
import './App.css'
import Selectedclubs from './assets/Components/Selectclubs/Selectedclubs'
import Capturedpage from './assets/Components/CapturedImage/Capturedpage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Appcontextt } from './assets/Components/Hooks/context'
import { useState } from 'react'
import useLocalStorage from 'use-local-storage'

function App() {
  const client = new QueryClient()
  const [scores, setScores] = useLocalStorage("scorekey")
  const [scores2, setScores2] = useLocalStorage("scorekey2")


  return (
    <>
    <Appcontextt.Provider value={{scores, setScores, scores2, setScores2}}>
    <QueryClientProvider client={client}>
      <Capturedpage />
      <Selectedclubs/>
    </QueryClientProvider>
    </Appcontextt.Provider>
  
    </>
  )
}

export default App
