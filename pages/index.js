import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Home = ({ data }) => {
    return (
        <>
            <Head>
                <title>Exemplo Next PWA</title>
                <meta name="description" content="Exemplo de uma aplicação Next.js com PWA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {data.msg}
                </h1>
                <h2>PWA é um tipo aplicação híbrida entre um site e um aplicativo nativo, ao acessar o site pelo smartphone, irá aparecer uma alerta para instalar o site como aplicativo.</h2>
                <h2>Olá Alexandre.</h2>
                <h2>Olá Junior.</h2>
                <h2>Teste 2</h2>
            </div>
        </>
    )
}

export function getServerSideProps() {
    const data = { msg: 'Olá Mundo!' }
    return { props: { data } }
}

export default Home