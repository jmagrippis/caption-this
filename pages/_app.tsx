import React from 'react'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <>
    <header>
      <span role="img" aria-label="Caption this logo">
        📷
      </span>
    </header>
    <Component {...pageProps} />
  </>
)

export default MyApp
