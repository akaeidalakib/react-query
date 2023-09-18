import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App
