import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'

import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
