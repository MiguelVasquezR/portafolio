import styles from './Header.module.css';
import imgPerfil from '../../../public/perfil.jpg'


export default function Header(){

    return(
        <header className={styles.header}>

            <section className={styles.section__logo}>
                <img src={imgPerfil} alt="Imagen de Perfil" className={styles.img__perfil} />
                <h2>Miguel Vásquez</h2>
            </section>

            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.list__item}><a className={styles.list__item__link}>Inicio</a></li>
                    <li className={styles.list__item}><a className={styles.list__item__link}>Sobre mí</a></li>
                    <li className={styles.list__item}><a className={styles.list__item__link}>Projectos</a></li>
                    <li className={styles.list__item}><a className={styles.list__item__link}>Contactos</a></li>
                </ul>
            </nav>
            
        </header>
    )
}