import styles from './Card.module.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit} from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Card = ({ id, titulo, capa, categoria }) => {

    return (
        <div className={styles.container}>
            <div className={styles.content} style={{borderColor: `${categoria == 'front_end' ? '#6BD1FF' : categoria == 'back_end' ? '#00C86F' : categoria == 'mobile' ? '#FFBA05': '#fff'}` }}>
                <Link to={`/video/${categoria}/${id}`}>
                    <img className={styles.img} src={capa} alt={titulo} />
                </Link>                
                <div className={styles.container__buttons}>
                    <div className={styles.btn__text}>
                        <button className={styles.btn}>{<FaRegTrashAlt size={20} color='#fff' />}</button>
                        Deletar
                    </div>
                    <div className={styles.btn__text}>
                        <button className={styles.btn}>{<CiEdit size={24} color='#fff' />}</button>
                        Editar
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;