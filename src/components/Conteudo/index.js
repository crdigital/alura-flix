import { useEffect, useState } from 'react';
import styles from './Conteudo.module.css';
import Card from 'components/Card';

const Conteudo = () => {

    const [videosFrontend, setVideosFrontend] = useState([]);
    const [videosBackend, setVideosBackend] = useState([]);
    const [videosMobile, setVideosMobile] = useState([]);

    // frontend
    useEffect(() => {        
        fetch('https://api-alura-flix-ecru.vercel.app/front_end')
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados);
            setVideosFrontend(dados);
        });
    },[]);

    // backend
    useEffect(() => {   
        fetch('https://api-alura-flix-ecru.vercel.app/back_end')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideosBackend(dados)
        });        
    },[]);

     // mobile     
     useEffect(() => {  
        fetch('https://api-alura-flix-ecru.vercel.app/mobile')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideosMobile(dados)
        });
    },[]);


    return(
        <>
            <section className={styles.container}>
                <div className={styles.topo}>
                    <button className={styles.btn_front_topo} style={{backgroundColor:'#6BD1FF'}}>Front End</button>                    
                </div>
                <div className={styles.content}>
                    {videosFrontend.map((front) => (<Card key={front.id} id={front.id} capa={front.capa} titulo={front.titulo} categoria="front_end"/>))}
                </div>            
            </section>
            <section className={styles.container}>
                <div>
                    <button className={styles.btn_front_topo} style={{backgroundColor:'#00C86F'}}>Back End</button>
                </div>
                <div className={styles.content}>
                    {videosBackend.map((back) => (<Card key={back.id} id={back.id} capa={back.capa} titulo={back.titulo} categoria="back_end"/>))}
                </div>            
            </section>
            <section className={styles.container}>
                <div>
                    <button className={styles.btn_front_topo} style={{backgroundColor:'#FFBA05'}}>Mobile</button>
                </div>
                <div className={styles.content}>
                    {videosMobile.map((mobile) => (<Card key={mobile.id} id={mobile.id} capa={mobile.capa} titulo={mobile.titulo} categoria="mobile"/>))}
                </div>            
            </section>
        </>
    );
}

export default Conteudo;