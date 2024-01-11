import styles from './Certificate.module.css';

import CardCertificate from './CardCertificate/CardCertificate';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners'

const Certificate = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [slidesToShow, setSlidesToShow] = useState(1);
    const [certificates, setCertificates] = useState([]);

    const updateSlidesToShow = () => {
        if (window.innerWidth < 768) {
            setSlidesToShow(1);
        } else if (window.innerWidth >= 800) {
            setSlidesToShow(2);
        }
    };

    const getDataCertificate = async () => {
        try {
            const response = await fetch('https://backportafolio-production.up.railway.app/get/certificate');
            if (!response.ok) {
                throw new Error('Error al obtener los certificados');
            }
            const data = await response.json();
            setCertificates(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
        }
    };

    useEffect(() => {
        getDataCertificate()
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

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
        <section className={styles.certificate__container}>
            <h2 className={styles.certificate__titulo}>Certificados</h2>
            <div className={styles.certificate__carrusel__container}>
                {isLoading ? (
                    <PacmanLoader color="yellow" size={20} />
                ) : (
                    <Slider {...settings}>
                        {
                            certificates.map((certificado, index) => {
                                return (
                                    <CardCertificate
                                        key={index}
                                        nombre={certificado.nombre}
                                        descripcion={certificado.descripcion}
                                        img={certificado.img}
                                    />
                                );
                            })
                        }
                    </Slider>
                )}
            </div>
        </section>
    );
}

export default Certificate;