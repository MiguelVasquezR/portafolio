import styles from './Footer.module.css';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {

    return (
        <footer className={styles.footer}>

            <section className={styles.contacto}>
                <h2 className={styles.h2Footer}>Contactame: </h2>
                <ol className={`${styles.lista__fotter} ${styles.ol__contactame}`}>
                    <li className={styles.li__footer}>
                        <ul className={styles.item__ul}>
                            <li className={`${styles.item__list__footer} ${styles.titulo__item__contactame}`}>Teléfono</li>
                            <li className={styles.item__list__footer}>2283044402</li>
                        </ul>
                    </li>
                    <li className={styles.li__footer}>
                        <ul className={styles.item__ul}>
                            <li className={`${styles.item__list__footer} ${styles.titulo__item__contactame}`}>Correo</li>
                            <li className={styles.item__list__footer}><a href="gmail.com">mvrosas@gmail.com</a></li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section className={styles.redesSociales}>
                <h2 className={styles.h2Footer}>Redes Sociales</h2>
                <ol className={`${styles.lista__fotter} ${styles.lista__footer__redes}`}>

                    <li className={styles.li__footer}><FaFacebook size={40} color='#1877f2' /></li>
                    <li className={styles.li__footer}><AiFillInstagram size={40} color='#bc2a8d' /></li>
                    <li className={styles.li__footer}><FaSquareXTwitter size={40} color='#1da1f2' /></li>
                    <li className={styles.li__footer}><FaGithub size={40} /></li>
                    <li className={styles.li__footer}><FaLinkedin size={40} color='#0077b5' /></li>

                </ol>
            </section>

        </footer>
    );

}