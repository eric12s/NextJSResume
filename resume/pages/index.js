import Head from 'next/head'
import Header from '../components/Header';
import axios from 'axios';

export default function Home({ data }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>
        <Header />
    </main>
  )
}

export async function getStaticProps() {
  console.log('hey3')
  const data = await axios.get("https://my-json-server.typicode.com/eric12s/NextJSResume");
  console.log('hey', data);
  return {
    props: {
      data: data.,
    }
  };
}

