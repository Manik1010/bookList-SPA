import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'

import Books from './components/Books';
import BookDetails from './components/BookDetails'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorPage from './components/ErrorPage'
import Blog from './components/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,  
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('datas.json'),
      },
      {
        path: 'statistcs',
        element: <Books />,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },

      {
        path: 'blog',
        element: <Blog></Blog>

      },

      // {
      //   path: 'loader',
      //   element: <LoadingSpinner></LoadingSpinner>
      // },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> eitar jono duibar kore console e print hoy.... 
  
    // <App />
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
