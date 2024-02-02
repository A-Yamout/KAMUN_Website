import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures of KAMUN 24'"
          />
          <meta property="og:site_name" content="photos.kamunjo.com" />
          <meta
            property="og:description"
            content="See pictures of KAMUN 24'"
          />
          <meta property="og:title" content="KAMUN 24' Photos" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="KAMUN 24' Photos" />
          <meta
            name="twitter:description"
            content="See pictures of KAMUN 24'"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
