import styles from './App.module.css';
import Certificado from "./Components/Diplomados/Certificado";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import imgPerfil from '../public/perfil.jpg';
import { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {

    const imagesNames = ['css', 'html', 'java', 'js', 'Mongo db', 'mysql', 'python', 'react', 'docker', 'git']
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(imagesNames);
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };


    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.main}>

                <section className={styles.welcome}>
                    <img src={imgPerfil} alt="Imagen Perfil" className={styles.img__perfil} />
                    <h2 className={styles.h2}>Hola, soy Miguel Vásquez</h2>
                    <article className={styles.article__aboutMe}>
                        Soy estudiante de 6° semestre en Tecnologías Computacionales. Poseo conocimientos en diversas tecnologías, como Java, tecnologías Front End, C++, Python, entre otras.
                        Mi pasión por aprender me impulsa a descubrir nuevas cosas cada día, y me esfuerzo por mantenerme actualizado de forma continua.
                    </article>
                </section>

                <section className={styles.skills}>
                    <h2 className={styles.h2}>Skills</h2>
                    <div className={styles.img__skills__container}>
                        {
                            images ?
                                images.map((name) => { return <img src={'../public/' + name + ".png"} alt={'Imagen de' + name} className={styles.img__skills} /> })
                                :
                                ""
                        }
                    </div>
                </section>

                <section className={styles.project__container}>
                    <h2 className={styles.h2}>Proyectos</h2>

                    <div className={styles.project__java}>Java</div>

                    <div className={styles.project__front__end}>Front End</div>

                </section>

                <section className={styles.cetificados__container}>
                    <h2 className={styles.h2}>Certificados</h2>
                    <Slider {...settings} className={styles.cetificado__carrusel}>
                        <Certificado tecnologia={"Java"} descripcion={'Certificado en java'} />
                        <Certificado tecnologia={"Java"} descripcion={'Certificado en java'} />
                        <Certificado tecnologia={"Java"} descripcion={'Certificado en java'} />
                    </Slider>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default App;