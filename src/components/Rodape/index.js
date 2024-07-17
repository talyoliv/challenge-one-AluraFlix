import { Link } from 'react-router-dom';
import styles from './Rodape.module.css';
import RodapeLink from '../RodapeLink';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Link>
                <img className={styles.img_logo} src="/imagens/logo.png" alt='Logo AluraFlix'/>
            </Link>
            <nav>
                <RodapeLink>
                    <img className={styles.icon} src="/imagens/home.png" alt='Icone Home'/>
                    Home
                </RodapeLink>
                <RodapeLink>
                    <img className={styles.icon} src="/imagens/vector.png" alt='+'/>
                </RodapeLink>
            </nav>
            
        </footer>
    )
}

export default Rodape;