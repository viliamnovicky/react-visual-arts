import styles from './HomeCont.module.css'

function HomeCont({optClass, children}) {
    return (
        <div className={`${styles.homeCont} ${optClass}`}>
            {children}
        </div>
    )
}

export default HomeCont
