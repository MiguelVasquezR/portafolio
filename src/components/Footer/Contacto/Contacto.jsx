import styles from './Contacto.module.css';

import email from '../../../../public/img/gmail.png'
import telefono from '../../../../public/img/telefono.png'

const Contacto = () => {

    return (
        <div className={styles.contacto__container}>
            <h2>Contactame</h2>            
            <a className={styles.contacto__email} href='mailto:mvrosas01@gmail.com'><img src={email} alt="" className={styles.contacto__img}/>mvrosas01@gmail.com</a>
        </div>
    );
}

export default Contacto;