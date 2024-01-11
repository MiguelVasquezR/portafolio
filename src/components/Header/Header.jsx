import styles from './Header.module.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = ({band}) => {
    const navigate = useNavigate();

    const handleArrowBack = () => {
        navigate("/");        
    }

    return(
        <header className={styles.header__container}>            

            {band ? <FaArrowAltCircleLeft onClick={handleArrowBack} color={'white'} size={25} /> : <h2 className={styles.texto}>Hola, soy Miguel Vásquez</h2>}
        </header>
    );
}

export default Header;