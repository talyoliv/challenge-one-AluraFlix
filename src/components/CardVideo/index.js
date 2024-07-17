import BotaoCard from '../BotaoCard';
import { Link } from 'react-router-dom';
import styles from './CardVideo.module.css';

function CardVideo({id, imagem, titulo, corDaBorda}) {
    return (
        <div className={styles.card} style={{borderColor: corDaBorda}}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={imagem} alt={titulo} className={styles.capa_video}/>
            </Link>            
            <div className={styles.botoes}>
                <BotaoCard className={styles.botao}><img src='/imagens/deletar.png' alt='Ícone botão deletar'/>Deletar</BotaoCard>
                <BotaoCard className={styles.botao}><img src='/imagens/editar.png' alt='Ícone botão editar'/>Editar</BotaoCard>
            </div>
        </div>
    )
}

export default CardVideo;