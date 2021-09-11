import '../styles/globals.css';
import axios from 'axios';
import Header from '../components/Header';

export async function getStaticProps() {
  console.log('hey3')
  const data = await axios.get("https://my-json-server.typicode.com/eric12s/NextJSResume");
  console.log('hey', data);
  return {
    props: {
      data: await data.json(),
    }
  };
}


function MyApp({ data }) {
  console.log('hey2', data)
  return <Header data={data} />
}

export default MyApp
