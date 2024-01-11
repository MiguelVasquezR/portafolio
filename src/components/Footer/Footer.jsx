import styles from './Footer.module.css';

import Redes from './Redes/Redes';
import Contacto from './Contacto/Contacto';

const Footer = () => {

    return(
        <div className={styles.footer__container}>
            <Contacto />
            <Redes />
        </div>
    )
}

export default Footer;