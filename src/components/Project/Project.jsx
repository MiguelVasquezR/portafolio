import styles from './Project.module.css';

import CardProject from './CardProject/CardProject';
import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Project = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(1);
    const [projects, setProjects] = useState([]);

    const updateSlidesToShow = () => {
        if (window.innerWidth < 768) {
            setSlidesToShow(1);
        } else if (window.innerWidth >= 800) {
            setSlidesToShow(2);
        }
    };

    useEffect(() => {
        getDataProject();
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const getDataProject = () => {
        fetch('https://backportafolio-production.up.railway.app/get/projects')
            .then((res) => {
                if (res.ok) {
                    setIsLoading(false)
                    return res.json();                    
                } else {
                    throw new Error('Error al obtener los proyectos');
                }
            })
            .then((data) => {                
                setProjects(data);
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error.message);
            });
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
        <section className={styles.projects__container}>
            <h2 className={styles.projects__titulo}>Proyectos</h2>
            <div className={styles.projects__carrusel__container}>
                {
                    isLoading ?
                        <PacmanLoader color="yellow" size={20} className={styles.pacman} />
                        :
                        <Slider {...settings}>
                            {
                                projects.map((project)=>{
                                    return <CardProject id={project.id} nombre={project.nombre} descripcionBreve={project.descripcionBreve} tecnologia={project.tecnologia} />
                                })
                            }                                                        
                        </Slider>
                }
            </div>
        </section>
    );
}

export default Project;