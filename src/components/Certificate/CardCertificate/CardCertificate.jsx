import styles from './CardCertificate.module.css';

const CardCertificate = ({nombre, descripcion, img}) => {           
    const arrayBuffer = new Uint8Array(img.data).buffer;
    const blob = new Blob([arrayBuffer], { type: 'image/png' });
    const imageUrl = URL.createObjectURL(blob);

    return(
        <div className={styles.card__container}>
            <picture>
                <img src={imageUrl} alt="Imagen para comprobar el certificado del que se habla en la carta" className={styles.card__img}/>                
            </picture>
            <article className={styles.card__information__container}>
                <h2 className={styles.card__information__titulo}>{nombre}</h2>
                <p className={styles.card__information__paragrapgh}>{descripcion}</p>
            </article>
        </div>
    );
}

export default CardCertificate;