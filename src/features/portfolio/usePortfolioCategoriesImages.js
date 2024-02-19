import { useQuery } from "@tanstack/react-query";
import { getPortfolioCategoriesImagesUrls } from "../../services/apiCategoriesImages";

export function usePortfolioCategoriesImages() {
  const {
    isLoading: isLoadingPortfolioCategoriesImages,
    data: portfolioImages,
    error,
  } = useQuery({
    queryKey: ["portfolioImages"],
    queryFn: getPortfolioCategoriesImagesUrls,
  });

  return { isLoadingPortfolioCategoriesImages, portfolioImages, error };
}
