import styles from './Information.module.css';
import { useState, useEffect } from 'react';
import myimg from '../../../public/img/Rotro.jpg'

const Information = () => {
    const imagesNames = ['css', 'html', 'java', 'js', 'Mongo db', 'mysql', 'python', 'react', 'docker', 'git']
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(imagesNames);
    }, [])


    return (
        <section className={styles.information__Container}>
            <div className={styles.information__Container__personal}>
                <picture className={styles.information__img__container}>
                    <img src={myimg} alt="Una imagen de mi presentación para conocerme fisicamente" className={styles.information__img} />
                </picture>
                <p className={styles.information__paragraph}>Soy estudiante de 6° semestre en Tecnologías Computacionales. Poseo conocimientos en diversas tecnologías. Mi pasión por aprender me impulsa a descubrir nuevas cosas cada día, y me esfuerzo por mantenerme actualizado de forma continua.</p>
            </div>

            <div className={styles.information__skills__container}>
                <h2 className={styles.information__skills__titulo}>Skills</h2>
                <div className={styles.information__skills__logos__container}>
                    {
                        images.map((name, i) => {
                            return (
                                <img
                                    key={i + "-" + name}
                                    src={'../../../public/img/Logos/' + name + ".png"}
                                    alt={'Imagen de ' + name + ' como representacion de tecnología conocida'}
                                    className={styles.img__skills}
                                />
                            )
                        })
                    }
                </div>
            </div>

        </section>
    );
}

export default Information;