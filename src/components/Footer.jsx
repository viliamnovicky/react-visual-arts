import styles from './Footer.module.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; Viliam Novický {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
