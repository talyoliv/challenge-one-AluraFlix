import Container from '../../components/Container';
import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <Container>
            <section className={styles.container}>
                <h2>Ops!</h2>
                <p>O conteúdo que você procura não foi encontrado!</p>
            </section>
        </Container>
    )
}

export default NaoEncontrada;