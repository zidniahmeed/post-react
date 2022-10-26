import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Layout({title, children}) {
  return (
    <HelmetProvider>
        <Helmet>
            <title>{title} | Learning</title>
        </Helmet>
        {children}
    </HelmetProvider>
  )
}
