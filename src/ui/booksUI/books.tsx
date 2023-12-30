import { useBooks } from "../../hooks/useBooks";
import style from './books.module.scss'
import paternIMG from '../../../public/patern.jpg'
import { Loader2 } from "lucide-react";

const BooksUI = () => {

    const {isLoading, data} = useBooks()

    return (
        <div className={style.wraper}>
          {isLoading ? (
            <div><Loader2 color="#e48304" width={45} height={45} className={style.loader} /></div>
          ) : data?.length ? (
            data.map((book) => (
              <div key={book.id} className={style.bg}>
                <img src={paternIMG} alt="" className={style.img}/>
                <div className={style.info}>
                  <p className={style.author}>{book.author}</p>
                  <p className={style.title}>{book.title}</p>
                  <p className={style.ganre}>{book.ganre}</p>
                  <button className={style.button}>Детальніше</button>
                </div>
              </div>
            ))
          ) : (
            <div>Data not found!</div>
          )}
        </div>
      );
}
export {BooksUI}