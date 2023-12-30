import { useQuery } from "@tanstack/react-query"
import bookService from "../services/book.service"

export const useBooks = () => {
     return useQuery({
        queryKey: ['books'],
        queryFn: () => bookService.getAllBooks(),
        select: ({data}) => data
    })
}


