import Head from 'next/head'
import 'primeicons/primeicons.css'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>meiazero | Emanuel Avila</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.center}>
      <p className={styles.msg}>On development.</p>
      <div className={styles.social}>
        <div className={styles.box}>
          <i className="pi pi-instagram"></i>
          <a href="http://instagram.com/avila.zip" target="_blank" rel="noopener noreferrer">avila.zip</a>
        </div>
        <div className={styles.box}>
          <i className="pi pi-github"></i>
          <a href="http://github.com/meiazero" target="_blank" rel="noopener noreferrer">meiazero</a>
        </div>
      </div>
    </div>
    </>
  )
}
