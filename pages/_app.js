import { Fragment } from 'react'
import Head from 'next/head'
import '../styles/globals.scss'

const MyApp = props => {
  const { Component, pageProps } = props

  return (
    <Fragment>
      <Head>
        <title>cexlt.io</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
