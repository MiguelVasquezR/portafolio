import styles from './Dashbord.module.css'

import Header from '../../components/Header/Header';
import Information from '../../components/Information/Information';
import Project from '../../components/Project/Project';
import Certificate from '../../components/Certificate/Certificate';
import Footer from '../../components/Footer/Footer';

const Dashbord = () => {

    return(
        <>
            <Header band={false} />

            <main className={styles.main__container}>
                <Information />
                <Project />
                <Certificate />                
            </main>

            <footer className={styles.footer__container}>
                <Footer />
            </footer>        
        </>
    )
}

export default Dashbord;