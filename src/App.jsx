
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { QueryClient, QueryClientProvider } from "react-query";
import ExchangeRate from './components/ExchangeRate.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      method: "GET", // Default HTTP method for queries
      refetchOnWindowFocus: false, // Disable automatic refetching on window focus
      refetchInterval: 60000, // Refetch queries every 60 seconds
    },
  }, 
});

function App() {
  return ( 
    <QueryClientProvider client={queryClient}>
    
    <ExchangeRate />
  </QueryClientProvider>
  );
}

export default App
