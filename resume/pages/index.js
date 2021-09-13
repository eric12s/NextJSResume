import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import useInView from "react-cool-inview";
import axios from 'axios';
const About = dynamic(() => import('../components/About'));
const Resume = dynamic(() => import('../components/Resume'));
const Portfolio = dynamic(() => import('../components/Portfolio'));
const Testimonials = dynamic(() => import('../components/Testimonials'));
const Contact = dynamic(() => import('../components/Contact'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home({ data }) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  })
  
  return (
    <main>
      <Head>
        <title>Home page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="icons/favicon.ico" />
        <link rel="apple-touch-icon" href="icons/apple-touch-icon.png" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" defer></script>
        {/* <script>{window.jQuery || document.write('<script src="js/jquery-1.10.2.min.js"><\/script>')}</script> */}
        <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js" defer></script>

        <script src="js/jquery.flexslider.js" defer></script>
        <script src="js/waypoints.js" defer></script>
        <script src="js/jquery.fittext.js" defer></script>
        <script src="js/magnific-popup.js" defer></script>
        <script src="js/init.js" defer></script>
      </Head>

      <Header {...data} />
      <About props={data} />
      <div ref={observe}>
        {inView && <Resume {...data} />}
      </div>
      {inView && (
        <>
          <Portfolio {...data} />
          <Testimonials testimonials={data.testimonials} />
          <Contact {...data} />
          <Footer {...data} />
        </>
      )}
    </main>
  )
}

export async function getStaticProps() {
  const data = await (await axios.get("http://127.0.0.1:5500/db.json")).data;
  return {
    props: {
      data: data,
    }
  };
}

