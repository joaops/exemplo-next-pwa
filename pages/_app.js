import { useEffect } from 'react'
import Head from 'next/head'

import '../styles/globals.css'


const App = ({ Component, pageProps }) => {
    useEffect(() => {
        document.documentElement.lang = 'pt-br'
    })

    return (
        <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App
