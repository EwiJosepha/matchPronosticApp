
import './App.css'
import Selectedclubs from './assets/Components/Selectclubs/Selectedclubs'
import Capturedpage from './assets/Components/CapturedImage/Capturedpage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Appcontextt } from './assets/Components/Hooks/context'

function App() {
  const client = new QueryClient()
  const [score, setScore] = useState(0)

  return (
    <>
    <Appcontextt.Provider value={{score, setScore}}>
    <QueryClientProvider client={client}>
      {/* <Capturedpage /> */}
      <Selectedclubs/>
    </QueryClientProvider>
    </Appcontextt.Provider>
  
    </>
  )
}

export default App
