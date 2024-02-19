import { useQuery } from "@tanstack/react-query";
import { getPortfolioCategoriesImagesUrls } from "../../services/apiCategoriesImages";
import { getPortfolioImagesUrls } from "../../services/apiPortfolioImages";

export function usePortfolioImages(category) {
  const {
    isLoading: isLoadingPortfolioImages,
    data: portfolioImages,
    error,
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: () => getPortfolioImagesUrls(category),
  });

  return { isLoadingPortfolioImages, portfolioImages, error };
}