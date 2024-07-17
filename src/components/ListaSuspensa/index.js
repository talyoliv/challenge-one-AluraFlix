import styles from './ListaSuspensa.module.css';

function ListaSuspensa(props) {
    return (
        <div className={styles.lista_suspensa}>
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={evento => props.valorAlterado(evento.target.value)}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;