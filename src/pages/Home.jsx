import Navbar from "../components/Navbar"
import styles from './Home.module.css'

function Home() {
    return (
        <div>
            <Navbar />
            <div className={styles.home}></div>
        </div>
    )
}

export default Home
