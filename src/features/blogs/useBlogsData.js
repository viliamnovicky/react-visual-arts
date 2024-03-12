import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/apiBlogs";

export function useBlogsData() {
  const {
    isLoading,
    data: blogs,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  return { isLoadingBlogs: isLoading, blogs, blogsError: error };
}