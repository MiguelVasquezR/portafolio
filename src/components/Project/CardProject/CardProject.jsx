import styles from './CardProject.module.css'

import logo from '../../../../public/img/Logos/java.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const CardProject = ({id, nombre, descripcionBreve, tecnologia}) => {
    const navigate = useNavigate();    

    const goToProject = () => {
        navigate(`/project/${id}`)
    }

    return (
        <div className={styles.card__container}>
            <picture className={styles.card__img__container}>
                <img src={logo} alt="Logo de la tecnología con la que se realizo el proyecto" className={styles.card__img} />
            </picture>
            <div className={styles.card__information__container}>
                <article className={styles.card__article__project}>
                    <h2 className={styles.card__titulo__project}>{nombre}</h2>
                    <p className={styles.card__paragraph__project}>{descripcionBreve}</p>
                </article>
                <div className={styles.btn__container}>
                    <button className={styles.card__btn__project} onClick={goToProject}>Ver</button>
                </div>
            </div>
        </div>
    );
}

export default CardProject;