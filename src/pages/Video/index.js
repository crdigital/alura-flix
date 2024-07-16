import styles from './Video.module.css';
import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Video = () => {

    const [videos, setVideos] = useState([]);
    const params = useParams();


    useEffect(() => {
        fetch(`https://api-alura-flix-ecru.vercel.app/${params.categoria}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    },[]);

    const video = videos.find((video) => video.id === Number(params.id));

    if(!video){
        return (<h2>Nenhm video para renderizar</h2>);
    }

    return (
        <>
            <Cabecalho />
                <section className={styles.container}>
                    <iframe
                        width="560"
                        height="315"
                        src={video.link}
                        title={video.titulo}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    >
                    </iframe>
                </section>
            <Rodape />
        </>
    );
}

export default Video;