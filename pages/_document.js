import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Centralized exchange token’s Liquidity Token" />
          <meta property="og:description" content="Bring decentralization and liquidity to centralized tokens" />
          <meta property="og:url" content="https://cexlt.io" />
          <meta property="og:site_name" content="cexlt.io" />
          <meta property="og:image" content="https://cexlt.io/assets/assets/images/clt-icon.png" />
          <meta property="og:image:secure_url" content="https://cexlt.io/assets/assets/images/clt-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}