import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  // nextjs doesn't support environment variables in URLs used in getStaticProps
  //const res = await fetch(`${process.env.MOCK_API_HOST}/posts`)
  const res = await fetch('http://localhost:3001/posts')
  const posts = await res.json()

  return { props: { posts } }
}

export default function Index({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post, i) => (
          <div key={`post-${i}`}>{post.title}</div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
