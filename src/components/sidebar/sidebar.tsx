import { BookMarked, Home, Info, Search, Settings } from 'lucide-react'
import logoImg from '../../assets/img/logo.svg'
import styles from './sidebar.module.scss'

const SideBar = () => {
    return(
        <div className={styles.sidebar}>
            <img src={logoImg} alt='logo' className={styles.logo}/>
            <nav className={styles.nav}>
                 <a href='/' className={styles.nava}><Home /></a>
                 <a href='/mylibrery' className={styles.nava}><BookMarked /></a>
                 <a href='/settings' className={styles.nava}><Settings /></a>
                 <a href='/search' className={styles.nava}><Search /></a>
                 <a href='/info' className={styles.nava}><Info /></a>                
            </nav>
        </div>
    )
}

export default SideBar