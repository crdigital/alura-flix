import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from 'assets/imagens/logo.png';

const Cabecalho = () => {
    return (
        <>
            <header className={styles.container}>
                <img src={logo} alt='logotipo Alura Flix' />
                <div className={styles.containerButtons}>
                    <Link to="/">
                        <button className={styles.btnHome}>Home</button>
                    </Link>
                    <Link to="/novo-video">
                        <button className={styles.btnNewVideo}>
                            Novo vídeo
                        </button>
                    </Link>
                </div>
            </header>
            <hr className={styles.hr} />
        </>
    );
}

export default Cabecalho;