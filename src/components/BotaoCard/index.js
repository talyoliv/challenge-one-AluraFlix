import styles from './BotaoCard.module.css';

function BotaoCard(props) {
    return (
        <button className={styles.botao}>{props.children}</button>
    )
}

export default BotaoCard;