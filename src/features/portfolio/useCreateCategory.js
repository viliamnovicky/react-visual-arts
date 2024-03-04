import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateCategory() {
    const queryClient = useQueryClient()

    const {mutate: createCategory, isLoading: isCreatingCategory} = useMutation({
        mutationFn: ({data}) => createCategory(data.name),
        onSuccess: () => {
            console.log("created")
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
        onError: (err) => console.log(err)
    })
    return {isCreatingCategory, createCategory}
}