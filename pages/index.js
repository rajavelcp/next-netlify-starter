import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rajavel P</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my site!" />
        <p className="description">
          This site is under construction
        </p>
      </main>

      <Footer />
    </div>
  )
}
