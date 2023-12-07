
import './App.css'
import Selectedclubs from './assets/Components/Selectclubs/Selectedclubs'
import Capturedpage from './assets/Components/CapturedImage/Capturedpage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient()

  return (
    <>
    <QueryClientProvider client={client}>
      <Capturedpage />
    </QueryClientProvider>
  
    </>
  )
}

export default App
