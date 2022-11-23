import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <h1 className={styles.logo}>AppCo</h1>
            </div>
        </div>
    )
}

export default Header