import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import CabecalhoLink from '../CabecalhoLink';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src="/imagens/logo.png" alt='Logo AluraFlix'/>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./novovideo">
                    Novo Vídeo
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;