import styles from './CampoTexto.module.css';

function CampoTexto(props) {
    const valorDigitado = (evento) => {
        props.valorAlterado(evento.target.value)
    }

    return (
        <div className={styles.campo_texto}>
            <label>{props.label}</label>
            <input value={props.valor} onChange={valorDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;