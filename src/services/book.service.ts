import axios from "axios"
import { TBooks } from "../types/books.types"



class BookService {
    private API_BOOKS_URL = 'http://localhost:3030/api/books'

    async getAllBooks() {
        return axios.get<TBooks[]>(this.API_BOOKS_URL)
    }

    async getBooksById(id: number) {
        return axios.get<TBooks>(`${this.API_BOOKS_URL}/${id}`)
    }
}

export default new BookService()