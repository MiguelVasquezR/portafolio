import styles from './Certificado.module.css';

export default function Certificado(props){
    const {img, tecnologia, descripcion} = props;
    return(
        <div className={styles.containerCertificado}>            
            <img className={styles.img} src={img ? img : ""} alt={"Imagen certificado de " + tecnologia} />
            <h3 className={styles.h3}>{tecnologia}</h3>
            <p className={styles.tecnologiaTexto}>{descripcion}</p>
        </div>
    )
}