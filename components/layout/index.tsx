import styles from '../../styles/Layout.module.scss'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }: any) => {
    return (
        <div className={styles.parent}>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}

export default Layout