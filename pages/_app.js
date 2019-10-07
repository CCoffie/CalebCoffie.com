import React from 'react'
import App from 'next/app'
import 'resize-observer-polyfill'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps} />
        <style jsx global>{`
            body, html {
              margin: 0;
              padding: 0;
              background: black;
              overflow-x: hidden;
            }
            body {
              color: #19A123;
              font-family: monospace;
            }
            * {
              box-sizing: border-box;
            }
            .content-wrapper {
              padding: 2em;
            }
            .nav-container {
              width: 100vw;
              height: 10vh;
            }
          `}</style>
      </>
    )
  }
}

export default MyApp