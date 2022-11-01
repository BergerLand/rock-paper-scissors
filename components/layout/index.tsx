import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }: any) => {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout