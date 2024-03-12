import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../../services/apiBlogs";

export function useBlogData(name) {
  const {
    isLoading,
    data: blog,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlog(name),
  });

  return { isLoadingBlog: isLoading, blog, blogError: error };
}