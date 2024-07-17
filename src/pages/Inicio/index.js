import Banner from '../../components/Banner';
import styles from './Inicio.module.css';
import Categoria from '../../components/Categoria';
import { useState } from 'react';

function Inicio(props) {
    const categorias = [
        {
          nome: 'Front-End',
          cor: '#6BD1FF',
        },
        {
          nome: 'Back-End',
          cor: '#00C86F',
        },
        {
          nome: 'Mobile',
          cor: '#FFBA05',
        }
    ]

    const cssBackground = {backgroundColor: props.corCategoria};

    const [videos, setVideos] = useState([]);

    return (
        <main className={styles.main}>
            <Banner />
            {categorias.map(categoria => 
                <Categoria 
                key={categoria.id} 
                nome={categoria.nome} 
                corCategoria={categoria.cor}
                videos={videos.filter(video => video.categoria === categoria.nome)}
                />
            )}
        </main>               
    )
}

export default Inicio;