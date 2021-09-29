import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <>
            <Head>
                <title>Exemplo Next PWA</title>
                <meta name="description" content="Exemplo de Configuração de uma Aplicação Next.js com PWA." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <h1>Exemplo-Next-PWA</h1>
                <h2>PWA é um tipo aplicação híbrida entre um site e um aplicativo nativo, ao acessar o site pelo smartphone ou computador, irá aparecer uma alerta para instalar o site como aplicativo.</h2>
            </div>
        </>
    )
}

export default Home