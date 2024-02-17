import styles from './Portfolio.module.css'
import Navbar from '../components/Navbar'
import { getPortfolio } from '../services/apiPortfolio'
import { usePortfolioData } from '../features/usePortfolioData'

function Portfolio() {
    const {isLoading, portfolio, error} = usePortfolioData()
    console.log(portfolio[0])
    return (
        <>
            <Navbar />
            <div>
                {portfolio.map((category) => <p>{category.name}</p>)}
            </div>

        </>
    )
}

export default Portfolio
