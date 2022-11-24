import type { NextPage } from 'next'
import Head from 'next/head'
import Team from '../components/theTeam'
import Welcome from '../components/welcomePage'
import Footer from '../components/footer'
import Games from '../components/games'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gamversity</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>

   
     <Welcome />
    <Team />
    <Games />
     <Footer />
    </div>
  )
}

export default Home
