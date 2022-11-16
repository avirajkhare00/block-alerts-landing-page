import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Block Alerts</title>
        <meta name="description" content="Block Alerts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>Block Alerts</b>.
        </h1>

        <p className={styles.description}>
          Block Alerts provide a platform to set up alerts in your smart contracts. Whether you want to get alerts for any transaction or events, the block alerts platform will listen to the alert and send it to your Slack, MS teams, etc.
          <br />
          Using Block Alerts, you can also execute smart contracts methods.
          <br />
          Right now, we are only supporting EVM based chains.
        </p>
        <p className={styles.description}>
          Please fill this Google form to signup for private beta starting <b>23/11/2022</b>: https://forms.gle/85hT16TzgxHdDaCW6
        </p>
      </main>
    </div>
  )
}
