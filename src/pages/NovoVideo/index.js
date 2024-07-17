import Cabecalho from 'components/Cabecalho';
import styles from './NovoVideo.module.css';
import Rodape from 'components/Rodape';
import { useState } from 'react';

const NovoVideo = () => {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [capa, setCapa] = useState('');
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');

    function limpaCampos(){
        setTitulo('');
        setCategoria('');
        setCapa('');
        setLink('');
        setDescricao('');
    }

    function inserirNovoVideo(evento) {
        evento.preventDefault();

        try {

            fetch(`https://api-alura-flix-ecru.vercel.app/${categoria}`, {
                method: 'POST',
                headers: {
                   'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   'titulo': titulo,
                    'capa': capa,
                    'link': link,
                    'descricao': descricao
                })
            }).then(response => response.json());

            alert("Novo vídeo inserido com sucesso!");
            limpaCampos();
            
        } catch (error) {
            alert('Erro na inserção' + error);
        }
    }

    return (
        <>
            <Cabecalho />
            <form onSubmit={evento => inserirNovoVideo(evento)}>
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
                            <input type='text' placeholder='Insira um título' value={titulo} onChange={e => setTitulo(e.target.value)} />
                        </div>
                        <div className={styles.input}>
                            <label>Categoria</label>
                            <select
                                value={categoria}
                                onChange={e => setCategoria(e.target.value)}
                            >
                                <option value="">Selecione uma categoria</option>
                                <option value="front_end">Front-end</option>
                                <option value="back_end">Back-end</option>
                                <option value="mobile">Mobile</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.container__inputs}>
                        <div className={styles.input}>
                            <label>Imagem</label>
                            <input type='text' placeholder='Insira o link da imagem' value={capa} onChange={e => setCapa(e.target.value)} />
                        </div>
                        <div className={styles.input}>
                            <label>Vídeo</label>
                            <input type='text' placeholder='Insira o link do vídeo' value={link} onChange={e => setLink(e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.container__inputs}>
                        <div className={styles.input}>
                            <label>Descrição</label>
                            <textarea 
                                placeholder='Sobre o que é esse vídeo'
                                value={descricao} 
                                onChange={e => setDescricao(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className={styles.container_buttons}>
                        <button className={`${styles.button} ${styles.btnGuardar}`} type='submit'>Guardar</button>
                        <button className={`${styles.button} ${styles.btnLimpar}`} onClick={() => limpaCampos()}>Limpar</button>
                    </div>
                </div>
            </form>
            <Rodape />
        </>
    );
}

export default NovoVideo;