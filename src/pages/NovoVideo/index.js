import Cabecalho from 'components/Cabecalho';
import styles from './NovoVideo.module.css';
import Rodape from 'components/Rodape';

const NovoVideo = () => {
    return (
        <>
            <Cabecalho />
            <form>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>Novo Vídeo</h1>
                    <p className={styles.subtitulo}>
                        Complete o formulário para criar um novo card de vídeo
                    </p>
                    <hr />
                    <div className={styles.tituloForm}>
                        <p>Criar Card</p>
                    </div>
                    <hr />
                    <div className={styles.container__inputs}>
                        <div className={styles.input}>
                            <label>Título</label>
                            <input type='text' placeholder='Insira um título' />
                        </div>
                        <div className={styles.input}>
                            <label>Categoria</label>
                            <select>
                                <option>Selecione uma categoria</option>
                                <option>Front-end</option>
                                <option>Back-end</option>
                                <option>Mobile</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.container__inputs}>
                        <div className={styles.input}>
                            <label>Imagem</label>
                            <input type='text' placeholder='Insira o link da imagem' />
                        </div>
                        <div className={styles.input}>
                            <label>Vídeo</label>
                            <input type='text' placeholder='Insira o link do vídeo' />
                        </div>
                    </div>
                    <div className={styles.container__inputs}>
                        <div className={styles.input}>
                            <label>Descrição</label>
                            <textarea placeholder='Sobre o que é esse vídeo'></textarea>
                        </div>
                    </div>
                    <div className={styles.container_buttons}>
                        <button className={`${styles.button} ${styles.btnGuardar}`}>Guardar</button>
                        <button className={`${styles.button} ${styles.btnLimpar}`}>Limpar</button>
                    </div>
                </div>
            </form>
            <Rodape />
        </>
    );
}

export default NovoVideo;