import { useQuery } from "@tanstack/react-query";
import { getStore } from "../../services/apiStore";

export function useStoreData() {
  const {
    isLoading: isLoadingStore,
    data: store,
    error: errorStore,
  } = useQuery({
    queryKey: ["store"],
    queryFn: getStore,
  });

  return { isLoadingStore, store, errorStore };
}