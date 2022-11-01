import styles from '../../styles/Header.module.scss'
const Header = () => {
    return (
        <nav className={`du-font ${styles.center} ${styles.header}`}>
            Rock, Paper, Scissors!
        </nav>
    )
}

export default Header