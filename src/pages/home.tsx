import styles from '../assets/style/pages.module.scss'
import { AccauntPanel } from '../components/AccauntPanel/AccauntPanel'
import SideBar from '../components/sidebar/sidebar'
import { BooksUI } from '../ui/booksUI/books'

const HomePage = () => {
    return(
        <div className={styles.body}>
            <SideBar />
            <div className={styles.books}>
                <BooksUI />
            </div>
            <AccauntPanel />
        </div>
    )
}

export default HomePage