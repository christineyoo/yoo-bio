import Nav from './Nav'
import layoutStyle from '../styles/Home.module.css'

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={layoutStyle.container}>
            <main className={layoutStyle.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout