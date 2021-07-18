import Head from 'next/head'

import Header from '../components/Header'
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>HULU</title>
        <meta name="description" content="Generated by Anant Duhan" />
        <link
          rel="icon"
          href="https://findicons.com/files/icons/1742/ecqlipse_2/128/hulu_desktop.png"
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Result */}
      <Results results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

   const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
   ).then((res) => res.json());

   return {
     props: {
       results: request.results,
     },
   };
}
