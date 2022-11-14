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
          Right now, we are supporting methods from which you can read from blockchain. We are not supporting methods from which you can convert state of smart contracts.
        </p>

        <p className={styles.description}>
          <h1>Problem Statement</h1>
          Right now, we need to constantly look at etherscan for any transaction that is being done on the Ethereum blockchain. There is no way currently using which we get notified once a transaction is done or failed, or knowledge about any event, the smart contract will emit.
          This is what Block Alerts is trying to solve.
        </p>

        <p className={styles.description}>
          <h1>Solution</h1>
          Our solution consists of an infrastructure where we run an Ethereum node, and one of our backend services will keep on processing all the blocks. Once we have the required data, it makes a POST request on the webhook, whether it’s Slack, MS Teams, Telegram, etc.
          <br />
          Execute smart contracts methods from your slack bot.
        </p>

        <p className={styles.description}>
          <h1>Uses cases</h1>
          <ul>
            <li>
              Alerting will tell you whether a smart contract is working as expected.
            </li>
            <li>
              In case of multiple smart contract failure transactions, you will be notified.
            </li>
            <li>
              It is very much useful for debugging purposes.
            </li>
            <li>
              You don’t have to check etherscan again and again. You will be alerted once transaction is completed.
            </li>
            <li>
              It is very easy to directly execute methods from smart contracts.
            </li>
          </ul>
        </p>
      </main>
    </div>
  )
}
