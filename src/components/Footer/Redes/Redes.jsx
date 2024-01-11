import styles from './Redes.module.css';
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Redes = () => {

    return (
        <div className={styles.container__redes}>
            <h2 className={styles.redes__titulo}>Redes Sociales</h2>
            <div className={styles.links__container}>
                <a href="https://github.com/MiguelVasquezR" target='_blank'><FaGithub size={40} color={'#5c6bc0'} /></a>
                <a href="https://www.linkedin.com/in/miguel-vasquez12/" target='_blank'><IoLogoLinkedin size={44} color={'#007ab9'} /></a>
            </div>
        </div>
    );
}

export default Redes;