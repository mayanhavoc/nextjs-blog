import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi 👋, my name's Roberto and I'm a Web3 and Full Stack Developer</p>
      </section>
      <section>
        <p>Head over to my <Link href='/posts/first-post'>blog</Link></p>
      </section>
    </Layout>
  )
}
