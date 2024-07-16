import styles from './Rodape.module.css';
import logo from '../../assets/imagens/logo.png';

const Rodape = () => {
    return (
        <>
            <hr className={styles.hr} />
            <footer className={styles.container}>
                <img src={logo} alt='Logo Alura Flix' />
            </footer>
        </>
    );
}

export default Rodape;