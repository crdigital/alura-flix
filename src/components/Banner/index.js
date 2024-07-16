import styles from './Banner.module.css';
import playerImage from './player.png';

const Banner = () => {
    return (
        <section className={styles.capa}
            style={{ backgroundImage: `url('/imagens/banner.png')` }}>
            <div className={styles.container}>
                <div className={styles.container__left}>
                    <button>front end</button>
                    <div>
                        <h2>SEO com React</h2>
                        <p>
                            Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
                        </p>
                    </div>
                </div>
                <div>
                    <img src={playerImage} alt='Player image' />
                </div>
            </div>            
        </section>
    );
}

export default Banner;