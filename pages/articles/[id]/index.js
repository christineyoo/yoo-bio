import Link from 'next/link'
import {server} from '../../../config/index'

const Article = ({article}) => {
 return (
     <>
     <h1>{article.name}</h1> 
     <p>{article.description}</p>
     <br />
     <Link href='/'> Go Back </Link>
     </>
 )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/departments/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/departments`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: {id: id.toString()}}))
    return {
        paths,
        fallback: false
    }
}

export default Article