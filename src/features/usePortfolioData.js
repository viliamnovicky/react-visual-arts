import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "../services/apiPortfolio";

export function usePortfolioData() {
    const {isLoading, data: portfolio, error} = useQuery({
        queryKey: ["portfolio"],
        queryFn: getPortfolio
    })

    return {isLoading, portfolio, error}
}