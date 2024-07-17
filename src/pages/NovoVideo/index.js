import { useState } from 'react';
import Container from '../../components/Container';
import Formulario from '../../components/Formulario';

function NovoVideo() {
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
    
    const [videos, setVideos] = useState([]);

    const novoVideoAdicionado = (video) => {
        console.log(video);
        setVideos([...videos, video]);
    }

    return (
        <main>
            <Container>
            <Formulario categorias={categorias.map(categoria => categoria.nome)} videoCadastrado={video => novoVideoAdicionado(video)}/>
            </Container>
        </main>
    )
}

export default NovoVideo;