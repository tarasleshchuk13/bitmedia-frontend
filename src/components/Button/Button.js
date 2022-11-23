import styles from './Button.module.scss'

const Button = ({ onClick, children, type = 'button', styleType = 'primary' }) => {
    return (
        <button
            className={styleType === 'primary' ? styles.button : styles.buttonSecondary}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button