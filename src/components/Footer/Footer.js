import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo}>AppCo</div>
                    <div className={styles.text}>All rights reserved by ThemeTags</div>
                    <div className={styles.text}>Copyrights © 2019.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer