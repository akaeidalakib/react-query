import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App