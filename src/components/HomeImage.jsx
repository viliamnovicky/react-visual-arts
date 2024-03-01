import styles from './HomeImage.module.css'

function HomeImage({image, children, optClass}) {
    return (
        <div className={`${styles.homeImage} ${optClass}`}>
            <img src={`../../public/${image}`} className={styles.homeImage}></img>
            {children}
        </div>
    )
}

export default HomeImage