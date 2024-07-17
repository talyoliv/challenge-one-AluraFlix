import { useEffect, useState } from 'react';
import CardVideo from '../CardVideo';
import styles from './Categoria.module.css';

function Categoria(props) {
    const cssBackground = {backgroundColor: props.corCategoria};
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://665f42301e9017dc16f382df.mockapi.io/api/v1/Videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

     return (
             <section className={styles.categoria}>
                <h3 style={cssBackground}>{props.nome}</h3>
                <div className={styles.categoriaCardVideo} style={{cssBackground}}>
                    {videos.map((video) => {
                        return <CardVideo {...video} key={video.id} corDaBorda={props.corCategoria}/>
                    })}
                </div> 
            </section>
    )
}

export default Categoria;