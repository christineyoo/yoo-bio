import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({jokes}) {
  console.log(jokes)
  return (
    <div className={styles.container}>
      <h1>Yoo Bio</h1>
    </div>
  )
}


// export const getStaticProps = async () => {
//   const res = await fetch(`https://icanhazdadjoke.com`)
//   const jokes = await res.json()

//   return {
//     props: {
//       jokes
//     }
//   }
// }