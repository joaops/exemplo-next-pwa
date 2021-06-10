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
            </div>
        </>
    )
}

export function getServerSideProps() {
    const data = { msg: 'Olá Mundo!' }
    return { props: { data } }
}

export default Home