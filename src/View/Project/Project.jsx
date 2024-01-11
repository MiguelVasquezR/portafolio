import styles from './Project.module.css'
import { useParams } from 'react-router-dom';
import git from '../../../public/img/github.png'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Project = () => {
    const {id} = useParams();

    return (
        <>
            <Header band={true}/>

            <section className={styles.project__container}>
                <h2 className={styles.project__titulo}>La canasta</h2>
                <p className={styles.project__paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque provident aspernatur tenetur! Non unde ex itaque fuga necessitatibus laboriosam aut maiores corporis pariatur soluta, deleniti neque repudiandae dicta ratione hic.</p>

                <div className={styles.project__carrusel__container}>

                </div>

                <a href="#" className={styles.project__link}><img src={git} alt="Link al repositorio del proyecto" className={styles.project__link__repositorio} />Respositorio</a>
            </section>
        
            <footer className={styles.footer__container}>
                <Footer />
            </footer>
        </>
    );

}

export default Project;