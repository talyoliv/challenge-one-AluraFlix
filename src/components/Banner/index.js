import styles from './Banner.module.css';

function Banner() {
    return (
        <header className={styles.banner}>
            <img src='/imagens/banner.png' alt='Banner principal da página inicial'/>
        </header>
    )
}

export default Banner;