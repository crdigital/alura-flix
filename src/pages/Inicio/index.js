import Rodape from "components/Rodape";
import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Conteudo from "components/Conteudo";

const Inicio = () => {
    return(
        <>
            <Cabecalho/>
            <Banner />
            <Conteudo />
            <Rodape />
        </>
    );
}

export default Inicio;